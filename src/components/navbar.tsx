"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import SearchBar from './SearchBar'
import { isAdmin as checkIsAdmin, clearAdmin } from '@/lib/admin'

const categories = [
  { name: "Blade", path: "/category/blade", color: "cyber-glow-red" },
  { name: "Over Blade", path: "/category/over-blade", color: "cyber-glow-red" },
  { name: "Assist Blade", path: "/category/assist-blade", color: "cyber-glow-red" },
  { name: "Ratchet", path: "/category/ratchet", color: "cyber-glow-green" },
  { name: "Bit", path: "/category/bit", color: "cyber-glow-blue" },
  { name: "Other", path: "/category/other", color: "cyber-glow-yellow" },
  { name: "X-Over", path: "/category/x-over", color: "cyber-glow-purple" },
  { name: "Credits", path: "/category/credits", color: "cyber-glow-red" },
  { name: "Deck", path: "/deck", color: "cyber-glow-yellow" },
  { name: "RANDOM", path: "/random", color: "cyber-glow-red" },
]

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsAdmin(checkIsAdmin())
  }, [])

  const handleLogout = () => {
    clearAdmin()
    setIsAdmin(false)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-black/70 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center cyber-heading cyber-glow-yellow text-xl md:text-2xl"
          >
            <span className="mr-2">X</span>
            <span>LIBRARY</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <SearchBar />
          {isAdmin && (
            <button
              onClick={handleLogout}
              className="rounded bg-red-500 px-3 py-1 text-xs text-white"
            >
              Logout Admin
            </button>
          )}
          {/* Desktop Nav */}
          <nav className="flex items-center space-x-3 whitespace-nowrap">
            {categories.map((category) => (
              <Link
                key={category.path}
                href={category.path}
                className={`text-xs font-medium transition-colors hover:text-white
                  ${pathname === category.path ? category.color : "text-muted-foreground"}
                  uppercase tracking-wide`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMounted && (
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] p-0">
              <div className="p-3">
                <SearchBar />
              </div>
              <nav className="grid gap-2 p-4">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    href={category.path}
                    className={`block py-2 px-3 text-sm font-medium rounded-md
                      ${pathname === category.path ?
                        `bg-secondary ${category.color}` :
                        "text-muted-foreground hover:bg-accent"}
                      uppercase tracking-wide`}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  )
}
