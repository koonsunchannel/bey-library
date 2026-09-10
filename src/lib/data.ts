import type { Product } from "./types"

// Mock data for our cyber-themed library products
export const products: Product[] = [
  
  //troll credits
  {
    id: "CD001",
    name: "Credits? Why you want to know that???",
    image: "https://i.ibb.co/0pcrGh1N/Credit.webp",
    category: "credits",
    type: "credits",
    price: "This website don't want anything from you.",
    specs: {
      "Creator Name": "Why you want to know that?",
      "Donation": "Go to Philanthropy funds.",
      "Ownership": "I'm not Takara Tomy. Beyblade is not my product, This web for community free use.",
      "Objective": "To make it easier for the community to find Beyblade X parts data, Not find me.",
      "Special Thanks": "Thanks to Takara Tomy for making Beyblade.",
    },
  },
];

// Helper functions to get products (deterministic; do not perform randomization here)

export function getProducts(category?: Product['category']): Product[] {
  return category ? products.filter(product => product.category === category) : products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
