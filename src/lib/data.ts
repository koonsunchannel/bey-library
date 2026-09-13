import type { Product } from "./types"

// Mock data for our cyber-themed library products
export const products: Product[] = [
  
  //~ g (Stock Combo)
  //Blade-[ชื่อย่อ]-001
  //Rat-[ชื่อย่อ]-001
  //Bit-[ชื่อย่อ]-001
  //Ov-[ชื่อย่อ]-001
  //As-[ชื่อย่อ]-001
  //other-001
  //Blade-X-[ชื่อภาค]-001
];

// Helper functions to get products (deterministic; do not perform randomization here)

export function getProducts(category?: Product['category']): Product[] {
  return category ? products.filter(product => product.category === category) : products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
