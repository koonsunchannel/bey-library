"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { getProducts } from "@/lib/database-client"

type Hit = {
  id: string
  name: string
  category: string
  image?: string
}

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Hit[]>([])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [allProducts, setAllProducts] = useState<Hit[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Fetch all products on component mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts()
        const hits = products.map(p => ({
          id: p.id,
          name: p.name,
          category: p.category,
          image: p.image
        }))
        setAllProducts(hits)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (!query) {
      setResults([])
      setOpen(false)
      return
    }

    const q = query.trim().toLowerCase()
    const matched = allProducts
      .filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q)
        )
      })
      .slice(0, 8)

    setResults(matched)
    setOpen(matched.length > 0)
    setActive(0)
  }, [query, allProducts])

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((s) => Math.min(s + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((s) => Math.max(s - 1, 0))
    } else if (e.key === "Enter") {
      if (results[active]) {
        inputRef.current?.blur()
      }
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div className="relative w-64 md:w-96">
      <label className="sr-only">Search</label>
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => query && setOpen(results.length > 0)}
        placeholder="Search Part name...."
        className="w-full rounded-md border bg-white/5 px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-0"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls="search-results"
      />

      {open && (
        <ul
          id="search-results"
          role="listbox"
          tabIndex={0}
          className="absolute left-0 right-0 z-50 mt-1 max-h-64 overflow-auto rounded-md bg-popover p-1 shadow-lg"
        >
          {results.map((r, idx) => (
            <li
              key={r.id}
              role="option"
              aria-selected={idx === active}
              onMouseEnter={() => setActive(idx)}
              className={`flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-accent ${
                idx === active ? "bg-accent" : ""
              }`}
            >
              <Link
                href={`/product/${r.category}/${r.id}`}
                className="flex w-full items-center gap-3"
                onClick={() => {
                  setQuery("")
                  setOpen(false)
                }}
              >
                <img
                  src={r.image}
                  alt={r.name}
                  className="h-8 w-8 flex-none rounded object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
                <div className="truncate">
                  <div className="font-medium text-white">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.id}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
