import { getProducts } from '@/lib/data'
import { Separator } from '@/components/ui/separator'
import ClientBody from './ClientBody'

export function generateStaticParams() {
  return [
    { slug: 'blade' },
    { slug: 'assist-blade' },
    { slug: 'ratchet' },
    { slug: 'bit' },
    { slug: 'other' },
    { slug: 'x-over' },
    { slug: 'credits' }
  ]
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const isValidCategory = ['blade', 'assist-blade', 'ratchet', 'bit', 'other', 'x-over', 'credits'].includes(slug)
  if (!isValidCategory) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold cyber-heading">Category Not Found</h1>
        <p className="mt-4">The category you are looking for does not exist.</p>
      </div>
    )
  }

  const products = getProducts(slug as 'blade' | 'assist-blade' | 'ratchet' | 'bit' | 'other' | 'x-over' | 'credits')

  const titleColor =
    slug === 'blade' ? 'cyber-glow-red' :
    slug === 'assist-blade' ? 'cyber-glow-red' :
    slug === 'ratchet' ? 'cyber-glow-green' :
    slug === 'bit' ? 'cyber-glow-blue' :
    slug === 'other' ? 'cyber-glow-yellow' :
    slug === 'x-over' ? 'cyber-glow-purple' :
    'cyber-glow-red'

  const categoryTitle =
    slug === 'blade' ? 'BLADES' :
    slug === 'assist-blade' ? 'ASSIST BLADES' :
    slug === 'ratchet' ? 'RATCHETS' :
    slug === 'bit' ? 'BITS' :
    slug === 'other' ? 'OTHER' :
    slug === 'x-over' ? 'X-OVER' :
    'CREDITS'

  const categoryDescription =
    slug === 'blade' ? 'Top part for main playing style.' :
    slug === 'assist-blade' ? 'Top part for main playing style.' :
    slug === 'ratchet' ? 'Middle part for adjust high level of beyblade.' :
    slug === 'bit' ? 'Bottom part for main type play style of beyblade.' :
    slug === 'other' ? 'Other product about Beyblade X.' :
    slug === 'x-over' ? 'Older generation remake and collab in Beyblade X.' :
    'Credit for THIS WEBSITE.'

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
