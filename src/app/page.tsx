import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { getProducts } from '@/lib/data'
import Filter from '@/components/filter'
import { useState } from 'react'

export default function Home() {
  const bladeProducts = getProducts('blade')
  const bitProducts = getProducts('bit')

  const [filter, setFilter] = useState("All")

  const filteredBlades = bladeProducts.filter(
    (item) => filter === "All" || item.type === filter
  )
  const filteredBits = bitProducts.filter(
    (item) => filter === "All" || item.type === filter
  )

  return (
    <div className="container py-8 space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter cyber-heading cyber-glow-yellow sm:text-5xl xl:text-6xl">
                  Parts Library
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Library for every parts of Beyblade X.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-white text-black hover:bg-gray-200 cyber-border">
                  <Link href="#categories">VIEW CATEGORIES</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last cyber-border">
              <Image
                src="https://i.ibb.co/0RPwqkpX/image.webp"
                alt="Cyber tools collection hero image"
                width={800}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm cyber-border">Categories</div>
              <h2 className="text-3xl font-bold tracking-tighter cyber-heading sm:text-5xl">Parts Detail</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Look for every parts detail in any sections.
              </p>
            </div>
            <Filter onChange={setFilter} />
          </div>

          <div className="pt-12 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 cyber-heading cyber-glow-red">Blades</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredBlades.map((item) => (
                  <Card key={item.id} className="cyber-border">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <Image src={item.image} alt={item.name} width={600} height={400} className="object-cover w-full h-full" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Type: {item.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 cyber-heading cyber-glow-blue">Bits</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredBits.map((item) => (
                  <Card key={item.id} className="cyber-border">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <Image src={item.image} alt={item.name} width={600} height={400} className="object-cover w-full h-full" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Type: {item.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
