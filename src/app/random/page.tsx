"use client"

import { useState, useEffect } from "react";
import { getProducts } from "@/lib/database-client";
import type { Product } from "@/lib/types";

// Type for blade variants
type BeyVariant = {
  name: string;
  image: string;
  // some variants in data use string and some use string[] for `type`
  type: string | string[];
};

// Type for component parts (Lock Chip, Main Blade, etc.)
type ComponentPart = {
  id: string;
  name: string;
  image: string;
  componentType: 'lock-chip' | 'main-blade' | 'metal-blade';
  spin?: string;
};

function getRandomItem<T>(arr: T[]): T | undefined {
  if (!arr.length) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

function isBladeProduct(product: Product): boolean {
  return product.category === 'blade' || product.category === 'x-over' || product.id.startsWith('Blade-');
}

// Extract Lock Chip and Main Blade from CX items
function extractCXComponents(products: Product[]): ComponentPart[] {
  const components: ComponentPart[] = [];
  const cxBlades = products.filter(p => isBladeProduct(p) && p.specs?.['Product Line']?.toString().toLowerCase().includes('cx'));
  
  cxBlades.forEach(blade => {
    if (blade.specs) {
      const lockChipImage = blade.specs['Lock Chip Image'];
      const lockChipLabel = blade.specs['Lock Chip Label'];
      const mainBladeImage = blade.specs['Main Blade Image'] || blade.specs['Metal Blade Image'];
      const mainBladeLabel = blade.specs['Main Blade Label'] || blade.specs['Metal Blade Label'];
      const spin = blade.specs['Spin'];
      
      if (lockChipImage && lockChipLabel) {
        components.push({
          id: `${blade.id}-lock`,
          name: lockChipLabel.replace('Lock Chip : ', ''),
          image: lockChipImage,
          componentType: 'lock-chip',
          spin: spin
        });
      }
      
      if (mainBladeImage && mainBladeLabel) {
        const isMetal = mainBladeLabel.startsWith('Metal Blade');
        components.push({
          id: `${blade.id}-main`,
          name: mainBladeLabel.replace(/^(Main Blade|Metal Blade) : /, ''),
          image: mainBladeImage,
          componentType: isMetal ? 'metal-blade' : 'main-blade',
          spin: spin
        });
      }
    }
  });
  
  return components;
}

export default function RandomPage() {
  const [result, setResult] = useState<Product[]>([]);
  const [components, setComponents] = useState<ComponentPart[]>([]);
  const [lockedBladeId, setLockedBladeId] = useState<string>("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [excludeXOver, setExcludeXOver] = useState(true);

  // Fetch all products on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setAllProducts(products);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Blade list for dropdown
  const randomProducts = excludeXOver
    ? allProducts.filter(product => product.category !== 'x-over')
    : allProducts;

  // Blade list for dropdown
  const blades = randomProducts.filter(isBladeProduct);

  // Get all CX components once
  const cxComponents = extractCXComponents(randomProducts);

  // Helper to get random variant if blade has randomVariants
  function getRandomBladeWithVariant(blade: Product & { randomVariants?: BeyVariant[] }) {
    if (blade?.randomVariants?.length) {
      const variant = getRandomItem(blade.randomVariants);
      if (variant) {
        return { 
          ...blade,
          name: variant.name?.trim() || blade.name,
          image: variant.image,
          type: variant.type || blade.type
        };
      }
    }
    return blade;
  }

  function handleRandomize() {
    // Filter Blade-, Rat-, Bit-, As-, Hybrid-
    const rats = randomProducts.filter(p => p.id.startsWith("Rat-"));
    const hybrids = randomProducts.filter(p => p.id.startsWith("Hybrid-"));
    const bits = randomProducts.filter(p => p.id.startsWith("Bit-") && !p.id.startsWith("Hybrid-Bit-"));
    const asList = randomProducts.filter(p => p.id.startsWith("As-"));

    // ใช้ blade ที่เลือก ถ้าเลือกไว้, ถ้าไม่เลือกให้สุ่ม และสุ่ม variant ถ้ามี
    let blade = lockedBladeId ? blades.find(b => b.id === lockedBladeId) : getRandomItem(blades);
    // Only try to get random variant if blade exists
    blade = blade ? getRandomBladeWithVariant(blade) : undefined;

    // สุ่ม Rat- กับ Hybrid- รวมกัน แล้วเลือกมาแสดงแค่ 1 อย่าง
    let ratOrHybridList = [...rats, ...hybrids];

    // Special case: Blade-CMr-001 (Clock Mirage) must only use simple lock ratchets
    // Filter to only include Ratchets with "simple" in their type
    const requiresSimpleRatchet = Boolean(blade && (
      blade.id === "Blade-CMr-001" ||
      (blade.specs && typeof blade.specs.Gimmick === "string" && /simple/i.test(blade.specs.Gimmick))
    ));

    if (requiresSimpleRatchet) {
      ratOrHybridList = ratOrHybridList.filter((r: Product) => {
        // Only keep Rat- entries that have "simple" in their type string
        if (!r || !r.id) return false;
        if (!r.id.startsWith("Rat-")) return false;
        const t = r.type;
        if (typeof t === 'string') {
          return t.toLowerCase().includes('simple');
        } else if (Array.isArray(t)) {
          return t.some(type => typeof type === 'string' && type.toLowerCase().includes('simple'));
        }
        return false;
      });
    }

    const ratOrHybrid = getRandomItem(ratOrHybridList);

  let bit: Product | undefined = undefined;
  const randoms: Product[] = blade ? [blade] : [];
  const componentParts: ComponentPart[] = [];

    // ถ้า blade ที่สุ่มได้มี Product Line: Collaboration หรือ CX ให้สุ่ม As- มาแทรกต่อท้าย blade
    // Special: ถ้าเป็น "CX Xpansion" ให้สุ่ม Over Blade ตามด้วย Assist Blade
    if (blade && blade.specs) {
      const pl = (blade.specs['Product Line'] || '').toString();
      const plLower = pl.toLowerCase();

      // CX case: extract Lock Chip and Main Blade
      if (pl === 'CX' || plLower.includes('cx')) {
        // Get the spin from Main Blade
        const mainBladeSpin = blade.specs['Spin'];
        
        // Get Lock Chip from any CX blade with matching spin
        const cxLockChips = cxComponents.filter(c => 
          c.componentType === 'lock-chip' && c.spin === mainBladeSpin
        );
        const randomLockChip = getRandomItem(cxLockChips);
        if (randomLockChip) {
          componentParts.push(randomLockChip);
        }
        
        // Get Main Blade from this specific blade (randomize between available options)
        if (blade.specs['Main Blade Image'] || blade.specs['Metal Blade Image']) {
          // Check if blade has multiple Main Blade options
          const hasMultipleMainBlades = blade.specs['Main Blade Image2'] || blade.specs['Metal Blade Image2'];
          
          let selectedMainBladeImage: string;
          let selectedMainBladeLabel: string;
          
          if (hasMultipleMainBlades) {
            // Randomly choose between Main Blade 1 and 2
            const useSecondBlade = Math.random() < 0.5;
            
            if (useSecondBlade && (blade.specs['Main Blade Image2'] || blade.specs['Metal Blade Image2'])) {
              selectedMainBladeImage = blade.specs['Main Blade Image2'] || blade.specs['Metal Blade Image2'];
              selectedMainBladeLabel = blade.specs['Main Blade Label2'] || blade.specs['Metal Blade Label2'];
            } else {
              selectedMainBladeImage = blade.specs['Main Blade Image'] || blade.specs['Metal Blade Image'];
              selectedMainBladeLabel = blade.specs['Main Blade Label'] || blade.specs['Metal Blade Label'];
            }
          } else {
            selectedMainBladeImage = blade.specs['Main Blade Image'] || blade.specs['Metal Blade Image'];
            selectedMainBladeLabel = blade.specs['Main Blade Label'] || blade.specs['Metal Blade Label'];
          }
          
          if (selectedMainBladeImage && selectedMainBladeLabel) {
            const isMetal = selectedMainBladeLabel.startsWith('Metal Blade');
            componentParts.push({
              id: `${blade.id}-main`,
              name: selectedMainBladeLabel.replace(/^(Main Blade|Metal Blade) : /, ''),
              image: selectedMainBladeImage,
              componentType: isMetal ? 'metal-blade' : 'main-blade',
              spin: mainBladeSpin
            });
          }
        }
      }

      if (pl === 'Collaboration' || pl === 'CX') {
        // ตรวจสอบ Spin ของ Main Blade ถ้าเป็น Left ให้กรอง Assist Blade เป็น Left เท่านั้น
        const mainBladeComponent = componentParts.find(c => c.componentType === 'main-blade' || c.componentType === 'metal-blade');
        const mainBladeSpin = mainBladeComponent?.spin;
        
        let filteredAsList = asList;
        if (mainBladeSpin === 'Left') {
          // กรองเฉพาะ Assist Blade ที่เป็น Left Spin
          filteredAsList = filteredAsList.filter(p => p.specs?.['Spin'] === 'Left');
        }
        
        const asItem = getRandomItem(filteredAsList);
        if (asItem) randoms.push(asItem);
      }

      // CX Xpanded case (or any product line that contains both CX and Xpanded)
      if (plLower.includes('cx') && plLower.includes('xpanded')) {
        // ตรวจสอบ Spin ของ Main Blade ถ้าเป็น Left ให้กรอง Over และ Assist Blade เป็น Left เท่านั้น
        const mainBladeComponent = componentParts.find(c => c.componentType === 'main-blade' || c.componentType === 'metal-blade');
        const mainBladeSpin = mainBladeComponent?.spin;
        
        let filteredOverList = allProducts.filter(p => p.category === 'over-blade');
        let filteredAsList = asList;
        
        if (mainBladeSpin === 'Left') {
          // กรองเฉพาะ Over Blade และ Assist Blade ที่เป็น Left Spin
          filteredOverList = filteredOverList.filter(p => p.specs?.['Spin'] === 'Left');
          filteredAsList = filteredAsList.filter(p => p.specs?.['Spin'] === 'Left');
        }
        
        const overItem = getRandomItem(filteredOverList);
        const asItem = getRandomItem(filteredAsList);
        if (overItem) randoms.push(overItem);
        if (asItem) randoms.push(asItem);
      }
    }

    // เพิ่ม ratOrHybrid (ยกเว้น UX Xpanded ที่สุ่มเฉพาะ Bit)
    const isUxXpanded = blade && blade.specs && 
      blade.specs['Product Line'] && 
      blade.specs['Product Line'].toString().toLowerCase().includes('ux') && 
      blade.specs['Product Line'].toString().toLowerCase().includes('xpanded');
    
    if (ratOrHybrid && !isUxXpanded) {
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
    
    // สำหรับ UX Xpanded สุ่มเฉพาะ Bit ไม่ต้องมี Ratchet
    if (isUxXpanded) {
      bit = getRandomItem(bits);
      if (bit) {
        randoms.push(bit);
      }
    }

    setResult(randoms.filter(Boolean));
    setComponents(componentParts);
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
        <label className="mt-[10px] flex cursor-pointer items-center gap-2 text-sm text-white">
          <input
            type="checkbox"
            checked={excludeXOver}
            onChange={event => {
              const shouldExclude = event.target.checked
              setExcludeXOver(shouldExclude)
              if (shouldExclude && lockedBladeId) {
                const selectedBlade = allProducts.find(product => product.id === lockedBladeId)
                if (selectedBlade?.category === 'x-over') setLockedBladeId('')
              }
            }}
            className="h-4 w-4 accent-red-500"
          />
          Not include X-Over
        </label>
      </div>
      <button
        onClick={handleRandomize}
        className="bg-white border-2 border-red-500 text-red-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-red-50 transition mb-8"
      >
        Randomize
      </button>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Display component parts (Lock Chip, Main Blade) first */}
        {components.map((component, idx) => (
          <div key={component.id || idx} className="flex flex-col items-center max-w-xs">
            {component.image && (
              <img src={component.image} alt={component.name} className="w-40 h-40 object-contain rounded-lg border mb-2" />
            )}
            <div className="text-lg font-semibold text-center">{component.name}</div>
          </div>
        ))}
        {/* Display regular products (skip Blade if CX components are shown) */}
        {result.map((item, idx) => {
          // Skip Blade items when showing CX components
          if (isBladeProduct(item) && components.length > 0) {
            return null;
          }
          
          const displayName = item?.name || "";
          return (
            <div key={item?.id || idx} className="flex flex-col items-center max-w-xs">
              {item?.image && (
                <img src={item.image} alt={item.name} className="w-40 h-40 object-contain rounded-lg border mb-2" />
              )}
              <div className="text-lg font-semibold text-center">{displayName}</div>
            </div>
          )
        })}
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
            {(() => {
              const tokens: string[] = [];
              
              // Add component parts first (Lock Chip + Main Blade) with space between
              for (let i = 0; i < components.length; i++) {
                const comp = components[i];
                const name = comp.name || "";
                
                // If next component is main-blade/metal-blade and current is lock-chip, combine with space
                const next = components[i + 1];
                if ((comp.componentType === 'lock-chip') && next && 
                    (next.componentType === 'main-blade' || next.componentType === 'metal-blade')) {
                  const nextName = next.name || "";
                  tokens.push(`${name} ${nextName}`);
                  i++; // skip next
                } else {
                  tokens.push(name);
                }
              }
              
              // Add regular products (skip Blade- products for CX)
              for (let i = 0; i < result.length; i++) {
                const item = result[i];
                
                // Skip Blade items when showing CX components
                if (isBladeProduct(item) && components.length > 0) {
                  continue;
                }
                
                let name = item?.name || "";
                if ((item?.id?.startsWith("Rat-") || item?.id?.startsWith("Bit-") || item?.id?.startsWith("As-") || item?.id?.startsWith("Hybrid-") || item?.id?.startsWith("Over-") || item?.id?.startsWith("Ov-"))) {
                  name = name.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
                }

                const next = result[i + 1];
                if ((item?.id?.startsWith("Over-") || item?.id?.startsWith("Ov-")) && next && next.id?.startsWith("As-")) {
                  // combine Over + Assist with no space
                  let nextName = next.name || "";
                  if ((next.id?.startsWith("Rat-") || next.id?.startsWith("Bit-") || next.id?.startsWith("As-") || next.id?.startsWith("Hybrid-") || next.id?.startsWith("Over-") || next.id?.startsWith("Ov-"))) {
                    nextName = nextName.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
                  }
                  tokens.push(`${name}${nextName}`);
                  i++; // skip next (Assist)
                } else {
                  tokens.push(name);
                }
              }
              return tokens.join(" ");
            })()}
          </div>
        </div>
      )}
    </div>
  );
} 