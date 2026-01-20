"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface FilterOption {
  label: string
  value: string
  icon?: string
  group?: string
}

export default function Filter({ onChange, slug }: { onChange: (types: string[]) => void, slug?: string }) {
  // Configuration สำหรับแต่ละหมวดการกรอง
  const filterConfig: FilterOption[] = [
    // Product Line (สำหรับ blade)
    ...(slug === 'blade' ? [
      { label: "BX", value: "BX", group: "productLine" },
      { label: "UX", value: "UX", group: "productLine" },
      { label: "CX", value: "CX", group: "productLine" },
    ] : []),
    
    // Type กับไอคอน
    { label: "Attack", value: "attack", icon: "/Attack Type.webp", group: "type" },
    { label: "Balance", value: "balance", icon: "/Balance Type.webp", group: "type" },
    { label: "Stamina", value: "stamina", icon: "/Stamina Type.webp", group: "typeExtra" },
    { label: "Defense", value: "defense", icon: "/Defense Type.webp", group: "typeExtra" },
    
    // Spin Direction (สำหรับ blade และ assist-blade)
    ...(slug === 'blade' || slug === 'assist-blade' ? [
      { label: "Right Spin", value: "Right", group: "spin" },
      { label: "Left Spin", value: "Left", group: "spin" },
    ] : []),
    
    // Other
    { label: "Rare", value: "rare", group: "other" },
    // Hybrid (show only on bit page)
    ...(slug === 'bit' ? [
      { label: "Hybrid", value: "hybrid", group: "other" },
    ] : []),
  ];

  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (value: string) => {
    const newSelected = selectedTypes.includes(value)
      ? selectedTypes.filter(v => v !== value)
      : [...selectedTypes, value]
    setSelectedTypes(newSelected)
    onChange(newSelected)
  }

  const handleReset = () => {
    setSelectedTypes([])
    onChange([])
  }

  const getDisplayText = () => {
    if (selectedTypes.length === 0) {
      return "Filter"
    }
    if (selectedTypes.length === 1) {
      return filterConfig.find(f => f.value === selectedTypes[0])?.label || "Filter"
    }
    return `${selectedTypes.length} Selected`
  }

  // จัดกลุ่มตัวเลือก
  const groupedFilters = filterConfig.reduce((acc, item) => {
    if (!acc[item.group || 'other']) {
      acc[item.group || 'other'] = []
    }
    acc[item.group || 'other'].push(item)
    return acc
  }, {} as Record<string, FilterOption[]>)

  const renderFilterButton = (option: FilterOption) => {
    const isSelected = selectedTypes.includes(option.value)
    
    if (option.icon) {
      // Option with icon
      return (
        <button
          key={option.value}
          onClick={() => handleSelect(option.value)}
          className={`flex items-center gap-3 p-3 rounded-lg border-2 transition text-black ${
            isSelected
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => {}}
            className="w-4 h-4 cursor-pointer"
          />
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src={option.icon}
              alt={option.label}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium">{option.label}</span>
        </button>
      )
    } else {
      // Text option
      return (
        <button
          key={option.value}
          onClick={() => handleSelect(option.value)}
          className={`flex items-center gap-3 p-3 rounded-lg border-2 transition text-black ${
            isSelected
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => {}}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="text-sm font-medium">{option.label}</span>
        </button>
      )
    }
  }

  return (
    <div className="p-[5px] sm:p-4">
      <div className="flex gap-[5px] sm:gap-2 items-center flex-wrap">
        <div ref={dropdownRef} className="relative min-w-fit">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black border-2 border-gray-300 rounded-lg font-medium transition hover:border-gray-400 flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {getDisplayText()}
          </button>

          {isOpen && (
            <div className="absolute top-full mt-[5px] left-0 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto w-96">
              <div className="p-[10px] space-y-3">
                {/* Product Line Row (BX, UX, CX) */}
                {groupedFilters.productLine && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Product Line</p>
                    <div className="grid grid-cols-3 gap-2">
                      {groupedFilters.productLine.map(renderFilterButton)}
                    </div>
                  </div>
                )}

                {/* Type Row (Attack, Balance) */}
                {groupedFilters.type && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Type</p>
                    <div className="grid grid-cols-2 gap-2">
                      {groupedFilters.type.map(renderFilterButton)}
                    </div>
                  </div>
                )}

                {/* Type Extra Row (Stamina, Defense) */}
                {groupedFilters.typeExtra && (
                  <div className="grid grid-cols-2 gap-2">
                    {groupedFilters.typeExtra.map(renderFilterButton)}
                  </div>
                )}

                {/* Spin Direction Row (Right, Left) */}
                {groupedFilters.spin && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Spin Direction</p>
                    <div className="grid grid-cols-2 gap-2">
                      {groupedFilters.spin.map(renderFilterButton)}
                    </div>
                  </div>
                )}

                {/* Other */}
                {groupedFilters.other && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Other</p>
                    <div className="grid grid-cols-2 gap-2">
                      {groupedFilters.other.map(renderFilterButton)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Reset Button */}
        {selectedTypes.length > 0 && (
          <button
            onClick={handleReset}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white rounded-lg font-medium transition hover:bg-red-600 whitespace-nowrap text-sm sm:text-base flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
