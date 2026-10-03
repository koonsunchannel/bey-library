"use client"

import { useEffect, useState } from 'react'

export default function PatchDate() {
  const [date, setDate] = useState('--/----')

  useEffect(() => {
    const updateDate = () => setDate(new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      year: 'numeric',
    }).format(new Date()))

    updateDate()
    const interval = window.setInterval(updateDate, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return <span>PATCH DATE {date}</span>
}