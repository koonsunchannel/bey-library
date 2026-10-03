"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import { getProducts } from '@/lib/database-client'
import PartImageSelect from '@/components/PartImageSelect'
import type { Product } from '@/lib/types'

const DESIGN_WIDTH = 1152
const DESIGN_HEIGHT = 440
const EXPORT_WIDTH = 2800
const EXPORT_HEIGHT = 1200

type ImageOption = { name: string; image: string }
type BladePart = { key: string; label: string; image: string }
type Selection = {
  bladeId: string; bladeImage: string; lockChipId: string; mainBladeKey: string
  assistId: string; assistImage: string; overId: string; overImage: string
  ratchetId: string; ratchetImage: string; bitId: string; bitImage: string
  excludeXOver: boolean
}
type Deck = Selection & {
  blade?: Product; cx: boolean; cxXpanded: boolean; uxXpanded: boolean
  bladeImages: ImageOption[]; bladeImageOption?: ImageOption
  bladeParts: BladePart[]; bladePart?: BladePart; lockChipOptions: Product[]; lockChip?: Product
  assist?: Product; over?: Product; ratchet?: Product; bit?: Product; hybrid: boolean; complete: boolean
  assistImages: ImageOption[]; assistImageOption?: ImageOption
  overImages: ImageOption[]; overImageOption?: ImageOption
  ratchetImages: ImageOption[]; ratchetImageOption?: ImageOption
  bitImages: ImageOption[]; bitImageOption?: ImageOption
}

const emptySelection = (): Selection => ({ bladeId: '', bladeImage: '', lockChipId: '', mainBladeKey: '', assistId: '', assistImage: '', overId: '', overImage: '', ratchetId: '', ratchetImage: '', bitId: '', bitImage: '', excludeXOver: true })
const sanitizeName = (name: string) => name.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim()
const clean = (name: string) => name.replace(/\s*\([^)]*\)/g, '').replace(/^(Lock Chip|Main Blade|Metal Blade)\s*:\s*/i, '').replace(/\s+/g, ' ').trim()
const lineOf = (product?: Product) => String(product?.specs?.['Product Line'] || '').toLowerCase()
const cxOf = (product?: Product) => lineOf(product).includes('cx')
const cxXpandedOf = (product?: Product) => cxOf(product) && lineOf(product).includes('xpand')
const uxXpandedOf = (product?: Product) => lineOf(product).includes('ux') && lineOf(product).includes('xpand')

function imageOptions(product?: Product): ImageOption[] {
  if (!product) return []
  const candidates = [
    { name: product.name, image: product.image || '' },
    ...(product.randomVariants || []).map(item => ({ name: item.name || product.name, image: item.image })),
    ...(product.bey || []).map(item => ({ name: item.name || product.name, image: item.image })),
  ]
  const seen = new Set<string>()
  return candidates.filter(item => Boolean(item.image) && !seen.has(item.image) && Boolean(seen.add(item.image)))
}

function bladeParts(product?: Product): BladePart[] {
  if (!product?.specs) return []
  const specs = product.specs
  return [
    { key: 'Main Blade Image', label: String(specs['Main Blade Label'] || 'Main Blade'), image: String(specs['Main Blade Image'] || '') },
    { key: 'Main Blade Image2', label: String(specs['Main Blade Label2'] || 'Main Blade 2'), image: String(specs['Main Blade Image2'] || '') },
    { key: 'Main Blade Image3', label: String(specs['Main Blade Label3'] || 'Main Blade 3'), image: String(specs['Main Blade Image3'] || '') },
    { key: 'Metal Blade Image', label: String(specs['Metal Blade Label'] || 'Metal Blade'), image: String(specs['Metal Blade Image'] || '') },
    { key: 'Metal Blade Image2', label: String(specs['Metal Blade Label2'] || 'Metal Blade 2'), image: String(specs['Metal Blade Image2'] || '') },
    { key: 'Metal Blade Image3', label: String(specs['Metal Blade Label3'] || 'Metal Blade 3'), image: String(specs['Metal Blade Image3'] || '') },
  ].filter(part => part.image)
}

function hybridRatchet(product?: Product) {
  if (!product) return false
  const types = Array.isArray(product.type) ? product.type : [product.type]
  return types.some(type => type.toLowerCase().includes('hybrid')) ||
    String(product.specs?.Type || '').toLowerCase().includes('hybrid') ||
    String(product.specs?.['Contact Point'] || '').toLowerCase().includes('hybrid')
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise(resolve => {
    const image = new window.Image()
    image.crossOrigin = 'anonymous'
    image.onload = () => resolve(image)
    image.onerror = () => resolve(null)
    image.src = src
  })
}

function drawImage(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, x: number, y: number, width: number, height: number) {
  if (!image) return
  const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight)
  const drawWidth = image.naturalWidth * scale
  const drawHeight = image.naturalHeight * scale
  ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight)
}

function drawText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, size = 18) {
  if (!text) return
  while (size > 12) {
    ctx.font = `700 ${size}px Arial, sans-serif`
    if (ctx.measureText(text).width <= maxWidth) break
    size -= 1
  }
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.fillText(text, x, y, maxWidth)
}

function deckName(deck: Deck) {
  if (!deck.blade) return ''
  const names = deck.cx
    ? [clean(String(deck.lockChip?.specs?.['Lock Chip Label'] || deck.lockChip?.name || '')), clean(deck.bladePart?.label || ''), ...(deck.cxXpanded ? [clean(deck.over?.name || '')] : []), clean(deck.assist?.name || '')]
    : [clean(deck.blade.name)]
  if (!deck.uxXpanded) names.push(clean(deck.ratchet?.name || ''))
  if (!deck.hybrid) names.push(clean(deck.bit?.name || ''))
  return names.filter(Boolean).join(' ')
}

function drawDeck(ctx: CanvasRenderingContext2D, deck: Deck, index: number, getImage: (url?: string | null) => HTMLImageElement | null) {
  const x = 24 + index * 370
  const y = 140
  const w = 106
  const h = 105
  const gap = 6
  const cxCellW = w + gap / 2
  const cxCellH = h + gap / 2
  const cxBleed = 1
  const tile = (left: number, top: number, width: number, height: number, url?: string | null) => {
    ctx.fillStyle = '#626262'
    ctx.fillRect(left, top, width, height)
    drawImage(ctx, getImage(url), left + 5, top + 5, width - 10, height - 10)
  }

  if (deck.cx) {
    tile(x, y, cxCellW + cxBleed, cxCellH + cxBleed, String(deck.lockChip?.specs?.['Lock Chip Image'] || ''))
    tile(x + cxCellW - cxBleed, y, cxCellW + cxBleed, cxCellH + cxBleed, deck.bladePart?.image)
    if (deck.cxXpanded) {
      const lowerRowY = y + cxCellH - cxBleed
      tile(x, lowerRowY, cxCellW + cxBleed, cxCellH + cxBleed, deck.overImageOption?.image)
      tile(x + cxCellW - cxBleed, lowerRowY, cxCellW + cxBleed, cxCellH + cxBleed, deck.assistImageOption?.image)
    } else {
      tile(x, y + cxCellH - cxBleed, cxCellW * 2, cxCellH + cxBleed, deck.assistImageOption?.image)
    }
  } else {
    tile(x, y, w * 2 + gap, h * 2 + gap, deck.bladeImageOption?.image)
  }
  tile(x + 225, y, w, h, deck.uxXpanded ? '' : deck.ratchetImageOption?.image)
  tile(x + 225, y + h + gap, w, h, deck.hybrid ? '' : deck.bitImageOption?.image)
  drawText(ctx, deckName(deck), x + 170, 365, 345)
}

function resetSelection(bladeId: string, excludeXOver = true): Selection {
  return { ...emptySelection(), bladeId, excludeXOver }
}

export default function DeckBuilder() {
  const [products, setProducts] = useState<Product[]>([])
  const [selections, setSelections] = useState<Selection[]>(() => Array.from({ length: 3 }, emptySelection))
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [team, setTeam] = useState('')
  const [blader, setBlader] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let active = true
    getProducts().then(data => { if (active) setProducts(data) })
      .catch(() => { if (active) setError('Could not load parts. Please refresh and try again.') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  const blades = products.filter(product => product.category === 'blade' || product.category === 'x-over')
  const cxProducts = products.filter(product => cxOf(product) && product.specs?.['Lock Chip Image'])
  const assists = products.filter(product => product.category === 'assist-blade')
  const overs = products.filter(product => product.category === 'over-blade')
  const ratchets = products.filter(product => product.category === 'ratchet')
  const bits = products.filter(product => product.category === 'bit')

  const decks = useMemo<Deck[]>(() => selections.map(selection => {
    const availableBlades = selection.excludeXOver ? blades.filter(item => item.category !== 'x-over') : blades
    const availableCxProducts = selection.excludeXOver ? cxProducts.filter(item => item.category !== 'x-over') : cxProducts
    const blade = availableBlades.find(item => item.id === selection.bladeId)
    const cx = cxOf(blade)
    const cxXpanded = cxXpandedOf(blade)
    const uxXpanded = uxXpandedOf(blade)
    const images = imageOptions(blade)
    const bladeImageOption = images.find(item => item.image === selection.bladeImage) || images[0]
    const parts = bladeParts(blade)
    const bladePart = parts.find(item => item.key === selection.mainBladeKey) || parts[0]
    const matched = blade?.specs?.Spin ? availableCxProducts.filter(item => item.specs?.Spin === blade.specs?.Spin) : availableCxProducts
    const lockChipOptions = matched.length ? matched : availableCxProducts
    const lockChip = lockChipOptions.find(item => item.id === selection.lockChipId) || lockChipOptions[0]
    const assist = assists.find(item => item.id === selection.assistId)
    const over = overs.find(item => item.id === selection.overId)
    const ratchet = ratchets.find(item => item.id === selection.ratchetId)
    const bit = bits.find(item => item.id === selection.bitId)
    const assistImages = imageOptions(assist)
    const assistImageOption = assistImages.find(item => item.image === selection.assistImage) || assistImages[0]
    const overImages = imageOptions(over)
    const overImageOption = overImages.find(item => item.image === selection.overImage) || overImages[0]
    const ratchetImages = imageOptions(ratchet)
    const ratchetImageOption = ratchetImages.find(item => item.image === selection.ratchetImage) || ratchetImages[0]
    const bitImages = imageOptions(bit)
    const bitImageOption = bitImages.find(item => item.image === selection.bitImage) || bitImages[0]
    const hybrid = hybridRatchet(ratchet)
    const complete = Boolean(blade) && (!cx || Boolean(lockChip && bladePart && assist && (!cxXpanded || over))) && (uxXpanded || Boolean(ratchet)) && (hybrid || Boolean(bit))
    return { ...selection, blade, cx, cxXpanded, uxXpanded, bladeImages: images, bladeImageOption, bladeParts: parts, bladePart, lockChipOptions, lockChip, assist, assistImages, assistImageOption, over, overImages, overImageOption, ratchet, ratchetImages, ratchetImageOption, bit, bitImages, bitImageOption, hybrid, complete }
  }), [selections, blades, cxProducts, assists, overs, ratchets, bits])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    let cancelled = false
    const urls = [
      '/Beyblade_X_Logo_White.webp', '/favicon.png',
      ...decks.flatMap(deck => [
        deck.cx ? deck.lockChip?.specs?.['Lock Chip Image'] : deck.bladeImageOption?.image,
        deck.cx ? deck.bladePart?.image : '',
        deck.cxXpanded ? deck.overImageOption?.image : deck.cx ? deck.assistImageOption?.image : '',
        deck.cxXpanded ? deck.assistImageOption?.image : '',
        deck.uxXpanded ? '' : deck.ratchetImageOption?.image,
        deck.hybrid ? '' : deck.bitImageOption?.image,
      ]),
    ].filter((url): url is string => Boolean(url))

    Promise.all(urls.map(async url => [url, await loadImage(url)] as const)).then(results => {
      if (cancelled) return
      const imageMap = new Map(results)
      const getImage = (url?: string | null) => url ? imageMap.get(url) || null : null
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      const scale = Math.min(canvas.width / DESIGN_WIDTH, canvas.height / DESIGN_HEIGHT)
      const offsetX = (canvas.width - DESIGN_WIDTH * scale) / 2
      const offsetY = (canvas.height - DESIGN_HEIGHT * scale) / 2
      ctx.save()
      ctx.translate(offsetX, offsetY)
      ctx.scale(scale, scale)
      drawImage(ctx, getImage('/Beyblade_X_Logo_White.webp'), 22, 22, 510, 82)
      if (team.trim()) drawText(ctx, `Team: ${team.trim()}`, 735, 36, 390, 32)
      if (blader.trim()) drawText(ctx, `Blader: ${blader.trim()}`, 735, 76, 390, 32)
      drawImage(ctx, getImage('/favicon.png'), 1040, 9, 100, 100)
      decks.forEach((deck, index) => drawDeck(ctx, deck, index, getImage))
      ctx.restore()
    })
    return () => { cancelled = true }
  }, [decks, team, blader])

  const updateDeck = (index: number, patch: Partial<Selection>) => setSelections(current => current.map((deck, itemIndex) => itemIndex === index ? { ...deck, ...patch } : deck))

  const downloadJpg = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.toBlob(blob => {
      if (!blob) { setError('Could not create the JPG. Check that selected images are accessible.'); return }
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = 'MyDeck.jpg'
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    }, 'image/jpeg', 0.94)
  }

  const inputClass = 'w-full rounded border border-white/20 bg-[#171717] px-2 py-2 text-sm text-white outline-none focus:border-cyan-300 disabled:cursor-not-allowed disabled:opacity-40'
  const labelClass = 'mb-1 block text-xs font-medium text-white/65'

  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-[1500px] px-4 py-8 text-white md:px-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-4">
        <div><p className="mb-1 text-xs font-semibold uppercase text-cyan-300">Beyblade X</p><h1 className="text-3xl font-bold">Deck Builder</h1></div>
        <button onClick={downloadJpg} disabled={loading || decks.some(deck => !deck.complete)} className="inline-flex items-center gap-2 rounded bg-cyan-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"><Download className="h-4 w-4" /> Download JPG</button>
      </header>

      {error && <p role="alert" className="mb-4 text-sm text-rose-300">{error}</p>}
      {loading ? <p className="text-sm text-white/65">Loading parts...</p> : <>
        <section className="mb-7 grid gap-4 border-b border-white/15 pb-6 md:grid-cols-3" aria-label="Deck combo selections">
          {decks.map((deck, index) => <section key={index} className="space-y-3 border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pr-4 last:md:border-r-0">
            <h2 className="text-sm font-bold uppercase text-cyan-300">Combo {index + 1}</h2>
            <div>
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className={labelClass}>Blade</span>
                <label className="flex shrink-0 cursor-pointer items-center gap-1.5 text-[10px] text-white/75">
                  <input
                    type="checkbox"
                    checked={deck.excludeXOver}
                    onChange={event => {
                      const excludeXOver = event.target.checked
                      const chosenBlade = blades.find(item => item.id === deck.bladeId)
                      updateDeck(index, excludeXOver && chosenBlade?.category === 'x-over'
                        ? resetSelection('', excludeXOver)
                        : { excludeXOver, ...(excludeXOver ? { lockChipId: '' } : {}) })
                    }}
                    className="h-3.5 w-3.5 accent-red-500"
                  />
                  Not include X-Over
                </label>
              </div>
              <PartImageSelect
                value={deck.bladeId}
                placeholder="Select a Blade"
                onChange={bladeId => updateDeck(index, resetSelection(bladeId, deck.excludeXOver))}
                triggerClassName={inputClass}
                options={blades.filter(blade => !deck.excludeXOver || blade.category !== 'x-over').map(blade => {
                  const line = String(blade.specs?.['Product Line'] || '')
                  const suffix = line.toLowerCase().includes('cx') || line.toLowerCase().includes('xpand') ? ` (${line})` : blade.category === 'x-over' ? ' (X-Over)' : ''
                  return { value: blade.id, label: `${sanitizeName(blade.name)}${suffix}`, image: blade.image }
                })}
              />
            </div>
            {deck.blade && !deck.cx && deck.bladeImages.length > 1 && <label className="block"><span className={labelClass}>Blade Image Variant</span>
              <PartImageSelect value={deck.bladeImageOption?.image || ''} placeholder="Select an image" onChange={image => updateDeck(index, { bladeImage: image })} triggerClassName={inputClass} options={deck.bladeImages.map(option => ({ value: option.image, label: option.name, image: option.image }))} />
            </label>}
            {deck.cx && <div className="space-y-3 border-l-2 border-cyan-300/60 pl-3">
              <label className="block"><span className={labelClass}>Lock Chip</span>
                <PartImageSelect value={deck.lockChip?.id || ''} placeholder="Select a Lock Chip" onChange={lockChipId => updateDeck(index, { lockChipId })} triggerClassName={inputClass} options={deck.lockChipOptions.map(item => ({ value: item.id, label: clean(String(item.specs?.['Lock Chip Label'] || item.name)), image: String(item.specs?.['Lock Chip Image'] || '') }))} />
              </label>
              <label className="block"><span className={labelClass}>Main Blade / Metal Blade</span>
                <PartImageSelect value={deck.bladePart?.key || ''} placeholder="Select a blade part" onChange={mainBladeKey => updateDeck(index, { mainBladeKey })} triggerClassName={inputClass} options={deck.bladeParts.map(item => ({ value: item.key, label: item.label.replace(/^(Main Blade|Metal Blade)\s*:\s*/i, '').trim(), image: item.image }))} />
              </label>
              {deck.cxXpanded && <label className="block"><span className={labelClass}>Over Blade</span>
                <PartImageSelect value={deck.overId} placeholder="Select an Over Blade" onChange={overId => updateDeck(index, { overId, overImage: '' })} triggerClassName={inputClass} options={overs.map(item => ({ value: item.id, label: sanitizeName(item.name), image: item.image }))} />
                {deck.over && deck.overImages.length > 1 && <PartImageSelect value={deck.overImageOption?.image || ''} placeholder="Select an Over Blade image" onChange={overImage => updateDeck(index, { overImage })} triggerClassName={inputClass} options={deck.overImages.map(option => ({ value: option.image, label: option.name, image: option.image }))} />}
              </label>}
              <label className="block"><span className={labelClass}>Assist Blade</span>
                <PartImageSelect value={deck.assistId} placeholder="Select an Assist Blade" onChange={assistId => updateDeck(index, { assistId, assistImage: '' })} triggerClassName={inputClass} options={assists.map(item => ({ value: item.id, label: sanitizeName(item.name), image: item.image }))} />
                {deck.assist && deck.assistImages.length > 1 && <PartImageSelect value={deck.assistImageOption?.image || ''} placeholder="Select an Assist Blade image" onChange={assistImage => updateDeck(index, { assistImage })} triggerClassName={inputClass} options={deck.assistImages.map(option => ({ value: option.image, label: option.name, image: option.image }))} />}
              </label>
            </div>}
            <div className="grid grid-cols-2 gap-2">
              <label className="block"><span className={labelClass}>Ratchet</span>
                <PartImageSelect value={deck.uxXpanded ? '' : deck.ratchetId} placeholder={deck.uxXpanded ? 'Not used' : 'Select'} disabled={!deck.blade || deck.uxXpanded} onChange={ratchetId => updateDeck(index, { ratchetId, ratchetImage: '', ...(hybridRatchet(ratchets.find(item => item.id === ratchetId)) ? { bitId: '', bitImage: '' } : {}) })} triggerClassName={inputClass} options={ratchets.map(item => ({ value: item.id, label: sanitizeName(item.name), image: item.image }))} />
                {deck.ratchet && deck.ratchetImages.length > 1 && <PartImageSelect value={deck.ratchetImageOption?.image || ''} placeholder="Select a Ratchet image" disabled={deck.uxXpanded} onChange={ratchetImage => updateDeck(index, { ratchetImage })} triggerClassName={inputClass} options={deck.ratchetImages.map(option => ({ value: option.image, label: option.name, image: option.image }))} />}
              </label>
              <label className="block"><span className={labelClass}>Bit</span>
                <PartImageSelect value={deck.hybrid ? '' : deck.bitId} placeholder={deck.hybrid ? 'Not used' : 'Select'} disabled={!deck.blade || deck.hybrid} onChange={bitId => updateDeck(index, { bitId, bitImage: '' })} triggerClassName={inputClass} options={bits.map(item => ({ value: item.id, label: sanitizeName(item.name), image: item.image }))} />
                {deck.bit && deck.bitImages.length > 1 && <PartImageSelect value={deck.bitImageOption?.image || ''} placeholder="Select a Bit image" disabled={deck.hybrid} onChange={bitImage => updateDeck(index, { bitImage })} triggerClassName={inputClass} options={deck.bitImages.map(option => ({ value: option.image, label: option.name, image: option.image }))} />}
              </label>
            </div>
            <p className={`text-xs ${deck.complete ? 'text-emerald-300' : 'text-white/40'}`}>{deck.complete ? 'Combo ready' : 'Complete required selections'}</p>
          </section>)}
        </section>

        <section className="mb-4 grid gap-3 sm:grid-cols-2" aria-label="Optional deck labels">
          <label className="block"><span className={labelClass}>Team (optional)</span><input className={inputClass} value={team} onChange={event => setTeam(event.target.value)} placeholder="Enter team name" /></label>
          <label className="block"><span className={labelClass}>Blader (optional)</span><input className={inputClass} value={blader} onChange={event => setBlader(event.target.value)} placeholder="Enter blader name" /></label>
        </section>

        <section aria-label="Three-combo deck preview"><div className="overflow-hidden border border-white/15 bg-black"><canvas ref={canvasRef} width={EXPORT_WIDTH} height={EXPORT_HEIGHT} className="block h-auto w-full scroll-mt-20" aria-label="Three-combo deck preview" /></div></section>
      </>}
    </main>
  )
}