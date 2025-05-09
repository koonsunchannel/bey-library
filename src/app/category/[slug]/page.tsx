import { getProducts } from '@/lib/data'
import { Separator } from '@/components/ui/separator'
import ClientBody from './ClientBody'

export function generateStaticParams() {
  return [
    { slug: 'blade' },
    { slug: 'ratchet' },
    { slug: 'bit' },
    { slug: 'other' },
    { slug: 'x-over' }
  ]
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const isValidCategory = ['blade', 'ratchet', 'bit', 'other', 'x-over'].includes(slug)
  if (!isValidCategory) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold cyber-heading">Category Not Found</h1>
        <p className="mt-4">The category you are looking for does not exist.</p>
      </div>
    )
  }

  const products = getProducts(slug as 'blade' | 'ratchet' | 'bit' | 'other' | 'x-over')

  const titleColor =
    slug === 'blade' ? 'cyber-glow-red' :
    slug === 'ratchet' ? 'cyber-glow-green' :
    slug === 'bit' ? 'cyber-glow-blue' :
    slug === 'other' ? 'cyber-glow-yellow' :
    'cyber-glow-purple'

  const categoryTitle =
    slug === 'blade' ? 'BLADES' :
    slug === 'ratchet' ? 'RATCHETS' :
    slug === 'bit' ? 'BITS' :
    slug === 'other' ? 'OTHER' :
    'X-OVER'

  const categoryDescription =
    slug === 'blade' ? 'Top part for main playing style.' :
    slug === 'ratchet' ? 'Middle part for adjust high level of beyblade.' :
    slug === 'bit' ? 'Bottom part for main type play style of beyblade.' :
    slug === 'other' ? 'Other product about Beyblade X.' :
    'Older generation remake and collab in Beyblade X.'

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className={`text-4xl font-bold tracking-tighter cyber-heading ${titleColor} sm:text-5xl`}>
          {categoryTitle}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-lg mx-auto">
          {categoryDescription}
        </p>
        <Separator className="mt-8" />
      </header>

      <ClientBody products={products} slug={slug} />
    </div>
  )
}
