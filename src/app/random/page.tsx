"use client"

import { useState } from "react";
import { products } from "@/lib/data";
import type { Product } from "@/lib/types";

// Type for blade variants
type BeyVariant = {
  name: string;
  image: string;
  type: string[];
};

function getRandomItem<T>(arr: T[]): T | undefined {
  if (!arr.length) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function RandomPage() {
  const [result, setResult] = useState<any[]>([]);
  const [lockedBladeId, setLockedBladeId] = useState<string>("");

  // Blade list for dropdown
  const blades = products.filter(p => p.id.startsWith("Blade-"));

  // Helper to get random variant if blade has randomVariants
  function getRandomBladeWithVariant(blade: Product & { randomVariants?: BeyVariant[] }) {
    if (blade?.randomVariants?.length) {
      const variant = getRandomItem(blade.randomVariants);
      if (variant) {
        return { 
          ...blade,
          name: variant.name,
          image: variant.image,
          type: variant.type
        };
      }
    }
    return blade;
  }

  function handleRandomize() {
    // Filter Blade-, Rat-, Bit-, As-, Hybrid-
    const rats = products.filter(p => p.id.startsWith("Rat-"));
    const hybrids = products.filter(p => p.id.startsWith("Hybrid-"));
    const bits = products.filter(p => p.id.startsWith("Bit-") && !p.id.startsWith("Hybrid-Bit-"));
    const asList = products.filter(p => p.id.startsWith("As-"));

    // ใช้ blade ที่เลือก ถ้าเลือกไว้, ถ้าไม่เลือกให้สุ่ม และสุ่ม variant ถ้ามี
    let blade = lockedBladeId ? blades.find(b => b.id === lockedBladeId) : getRandomItem(blades);
    // Only try to get random variant if blade exists
    blade = blade ? getRandomBladeWithVariant(blade) : undefined;

    // สุ่ม Rat- กับ Hybrid- รวมกัน แล้วเลือกมาแสดงแค่ 1 อย่าง
    const ratOrHybridList = [...rats, ...hybrids];
    const ratOrHybrid = getRandomItem(ratOrHybridList);

    let bit: any = null;
    let randoms: any[] = [blade];

    // ถ้า blade ที่สุ่มได้มี price: CX- ให้สุ่ม As- มาแทรกต่อท้าย blade
    if (blade && typeof blade.price === "string" && blade.price.startsWith("CX-")) {
      const asItem = getRandomItem(asList);
      if (asItem) {
        randoms.push(asItem);
      }
    }

    // เพิ่ม ratOrHybrid
    if (ratOrHybrid) {
      if (ratOrHybrid.id.startsWith("Hybrid-")) {
        // ถ้าเป็น Hybrid- ให้แสดงเฉพาะ Hybrid- (ไม่ต้องแสดง Rat- และไม่ต้องสุ่ม Bit-)
        randoms.push(ratOrHybrid);
      } else if (ratOrHybrid.id.startsWith("Rat-")) {
        // ถ้าเป็น Rat- ให้แสดง Rat- และสุ่ม Bit-
        randoms.push(ratOrHybrid);
        bit = getRandomItem(bits);
        if (bit) {
          randoms.push(bit);
        }
      }
    }

    setResult(randoms.filter(Boolean));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1
        className="text-5xl font-bold mb-8 text-center cyber-glow-red"
      >
        RANDOM CUSTOM
      </h1>
      {/* Blade lock dropdown */}
      <div className="mb-6 w-full max-w-[180px]">
        <select
          id="blade-lock"
          className="w-full text-sm px-2 py-1 rounded-md border border-gray-300 shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-400 hover:bg-gray-50"
          value={lockedBladeId}
          onChange={e => setLockedBladeId(e.target.value)}
          aria-label="Blade lock selector"
        >
          <option value="">-- Random Blade --</option>
          {blades.map(b => (
            <option key={b.id} value={b.id}>{b.name}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleRandomize}
        className="bg-white border-2 border-red-500 text-red-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-red-50 transition mb-8"
      >
        Randomize
      </button>
      <div className="flex flex-wrap gap-8 justify-center">
        {result.map((item, idx) => (
          <div key={item?.id || idx} className="flex flex-col items-center max-w-xs">
            {item?.image && (
              <img src={item.image} alt={item.name} className="w-40 h-40 object-contain rounded-lg border mb-2" />
            )}
            <div className="text-lg font-semibold text-center">{item?.name}</div>
          </div>
        ))}
      </div>
      {/* ส่วน Result */}
      {result.length > 0 && (
        <div className="mt-10 w-full flex flex-col items-center">
          <div
            className="text-3xl font-bold mb-2 text-center"
            style={{ WebkitTextStroke: '1px white', color: '#b91c1c' }}
          >
            Result
          </div>
          <div
            className="text-2xl font-bold text-center text-white"
          >
            {result.map((item, idx) => {
              let name = item?.name || "";
              // ถ้าเป็น Rat-, Bit-, As-, หรือ Hybrid- ให้ตัดข้อความในวงเล็บออก (ลบทุกวงเล็บและ trim ช่องว่างซ้ำ)
              if ((item?.id?.startsWith("Rat-") || item?.id?.startsWith("Bit-") || item?.id?.startsWith("As-") || item?.id?.startsWith("Hybrid-"))) {
                name = name.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
              }
              return name;
            }).join(" ")}
          </div>
        </div>
      )}
    </div>
  );
} 