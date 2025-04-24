import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProductCardProps = {
  id: string
  name: string
  // description: string
  image: string
  category: 'blade' | 'ratchet' | 'bit' | 'other' | 'x-over'
  price: string
}

export function ProductCard({ id, name, image, category, price }: ProductCardProps) {
  // Determine the glow color based on category
  const glowColor =
    category === 'blade' ? 'cyber-glow-red' :
    category === 'ratchet' ? 'cyber-glow-green' :
    category === 'bit' ? 'cyber-glow-blue' :
    category === 'other' ? 'cyber-glow-yellow' :
    'cyber-glow-purple'

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:border-white border-muted cyber-border">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden relative bg-black">
          <Link href={`/product/${category}/${id}`}>
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className={`font-bold cyber-heading ${glowColor}`}>{name}</h3>
          {/* <p className="text-sm text-muted-foreground line-clamp-2">{description}</p> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="text-lg font-bold">{price}</div>
        <Button
          asChild
          variant="secondary"
          className="hover:bg-white hover:text-black uppercase tracking-wider"
        >
          <Link href={`/product/${category}/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
