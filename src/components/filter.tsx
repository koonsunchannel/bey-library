"use client";
import { useState } from "react";

const categories = ["All", "Attack", "Balance", "Stamina", "Defense"];

export default function Filter({ onChange }: { onChange: (type: string) => void }) {
  const [selected, setSelected] = useState("All");

  return (
    <div className="flex gap-2 mb-4">
      {categories.map((type) => (
        <button
          key={type}
          onClick={() => {
            setSelected(type);
            onChange(type);
          }}
          className={`px-3 py-1 rounded ${selected === type ? "bg-primary text-white" : "bg-gray-200"}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
