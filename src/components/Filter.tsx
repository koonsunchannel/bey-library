"use client"

import { useState } from "react"

export default function Filter({ onChange, slug }: { onChange: (type: string) => void, slug?: string }) {
  // เพิ่ม BX, UX, CX เฉพาะหน้า blade
  const types = slug === 'blade'
    ? ["All", "BX", "UX", "CX", "attack", "balance", "stamina", "defense", "rare"]
    : ["All", "attack", "balance", "stamina", "defense", "rare"];

  const [active, setActive] = useState("All")

  return (
    <div className="flex gap-2 flex-wrap p-4">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => {
            setActive(type)
            onChange(type)
          }}
          className={`px-4 py-2 rounded-full border ${active === type ? "bg-blue-600 text-white" : "bg-white text-black"}`}
        >
          {type}
        </button>
      ))}
    </div>
  )
}
