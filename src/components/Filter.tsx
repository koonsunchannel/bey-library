"use client"

import { useState } from "react"

const types = ["All", "attack", "balance", "stamina", "defense", "rare"]

export default function Filter({ onChange }: { onChange: (type: string) => void }) {
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
