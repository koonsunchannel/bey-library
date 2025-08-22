export type Product = {
  id: string
  name: string
  // description: string
  // fullDescription?: string
  image: string
  category: 'blade' | 'assist-blade' | 'ratchet' | 'bit' | 'other' | 'x-over' | 'credits'
  type: string | string[]
  price: string
  features?: string[]
  specs?: Record<string, string>
  stock?: number
  rating?: number
  relatedIds?: string[]
  bey?: Array<{
    id: string
    name: string
    image: string
  }>
  randomVariants?: Array<{
    name: string
    image: string
    type: string | string[]
  }>
  pro?: Array<{
    id: string
    name: string
    image: string
  }>
}
