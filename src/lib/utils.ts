import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const xOverGenerationOrder = [
  'bakuten shoot beyblade',
  'metal fight beyblade',
  'beyblade burst',
  'collab',
]

export function sortXOverProducts(products: Product[]): Product[] {
  return products.sort((a, b) => {
    const getGeneration = (product: Product) => {
      const originalGeneration = product.specs?.['Original Generation']?.toLowerCase() || ''
      if (originalGeneration.includes('bakuten shoot beyblade')) return xOverGenerationOrder[0]
      if (originalGeneration.includes('metal fight beyblade')) return xOverGenerationOrder[1]
      if (originalGeneration.includes('beyblade burst')) return xOverGenerationOrder[2]
      if (product.specs?.Collab) return xOverGenerationOrder[3]
      return null
    }

    const aGeneration = getGeneration(a)
    const bGeneration = getGeneration(b)
    const aGenerationIndex = aGeneration ? xOverGenerationOrder.indexOf(aGeneration) : xOverGenerationOrder.length
    const bGenerationIndex = bGeneration ? xOverGenerationOrder.indexOf(bGeneration) : xOverGenerationOrder.length
    const generationDifference = aGenerationIndex - bGenerationIndex
    if (generationDifference !== 0) {
      return generationDifference
    }

    const aDate = a.created_at ? new Date(a.created_at).getTime() : Number.MAX_SAFE_INTEGER
    const bDate = b.created_at ? new Date(b.created_at).getTime() : Number.MAX_SAFE_INTEGER
    return aDate - bDate
  })
}
