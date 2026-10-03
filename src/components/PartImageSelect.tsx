"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export type PartImageOption = {
  value: string
  label: string
  image?: string
}

type PartImageSelectProps = {
  value: string
  options: PartImageOption[]
  placeholder: string
  onChange: (value: string) => void
  disabled?: boolean
  triggerClassName?: string
}

const EMPTY_VALUE = '__part-image-select-empty__'

export default function PartImageSelect({ value, options, placeholder, onChange, disabled, triggerClassName }: PartImageSelectProps) {
  return (
    <Select
      value={value || EMPTY_VALUE}
      onValueChange={selected => onChange(selected === EMPTY_VALUE ? '' : selected)}
      disabled={disabled}
    >
      <SelectTrigger className={triggerClassName || 'w-full border-white/20 bg-[#171717] text-white focus:ring-cyan-300'}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="max-h-80 border-white/20 bg-[#171717] text-white">
        <SelectItem value={EMPTY_VALUE} textValue={placeholder}>
          <span className="flex w-full items-center justify-between gap-3">
            <span className="min-w-0 flex-1 truncate text-white/55">{placeholder}</span>
          </span>
        </SelectItem>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value} textValue={option.label}>
            <span className="flex w-full min-w-0 items-center justify-between gap-3">
              <span className="min-w-0 flex-1 truncate">{option.label}</span>
              {option.image ? (
                <img src={option.image} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 rounded border border-white/10 bg-black object-contain" />
              ) : (
                <span className="h-10 w-10 shrink-0 rounded border border-white/10 bg-black/40" />
              )}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}