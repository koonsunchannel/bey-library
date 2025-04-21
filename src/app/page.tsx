import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProducts } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

export default function Home() {
  // Get featured products (one from each category)
  const bladeProduct = getProducts('blade')[0]
  const ratchetProduct = getProducts('ratchet')[0]
  const bitProduct = getProducts('bit')[0]

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
                  Library for everyone who want to know variants version of Beyblade X parts.
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
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-3">
            {/* Blade Category */}
            <Card className="overflow-hidden transition-all duration-200 hover:border-white cyber-border">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="https://i.ibb.co/V039c69d/1-DS-1.webp"
                    alt="Blade Category"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold cyber-heading cyber-glow-red">BLADE</h3>
                <p className="text-muted-foreground">Top parts of Beyblade X for main play style and free style to custom.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full cyber-glow-red">
                  <Link href="/category/blade">EXPLORE BLADES</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Ratchet Category */}
            <Card className="overflow-hidden transition-all duration-200 hover:border-white cyber-border">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="https://i.ibb.co/Xf1hg983/3-60-1.webp"
                    alt="Ratchet Category"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold cyber-heading cyber-glow-green">RATCHET</h3>
                <p className="text-muted-foreground">Middle parts of Beyblade X for adjust high level and momentum.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full cyber-glow-green">
                  <Link href="/category/ratchet">EXPLORE RATCHETS</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Bit Category */}
            <Card className="overflow-hidden transition-all duration-200 hover:border-white cyber-border">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="https://i.ibb.co/Fb19tC1y/F-1.webp"
                    alt="Bit Category"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold cyber-heading cyber-glow-blue">BIT</h3>
                <p className="text-muted-foreground">Bottom part of Beyblade X to play with difference style.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full cyber-glow-blue">
                  <Link href="/category/bit">EXPLORE BITS</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
