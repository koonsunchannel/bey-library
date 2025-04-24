import { useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export function ProductList() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    if (!filter) return product.category === "blade" || product.category === "bit";
    return (
      (product.category === "blade" || product.category === "bit") &&
      product.specs?.Type === filter
    );
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setFilter(null)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">All</button>
        <button onClick={() => setFilter("Attack")} className="px-4 py-2 bg-red-200 hover:bg-red-300 rounded">Attack</button>
        <button onClick={() => setFilter("Balance")} className="px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded">Balance</button>
        <button onClick={() => setFilter("Stamina")} className="px-4 py-2 bg-green-200 hover:bg-green-300 rounded">Stamina</button>
        <button onClick={() => setFilter("Defense")} className="px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded">Defense</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}