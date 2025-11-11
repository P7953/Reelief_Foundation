'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

  useEffect(() => {
    // Open registration portal in new tab
    window.open('https://portal.saptrishifoundation.in/signup', '_blank', 'noopener,noreferrer')
    // Redirect back to home page
    router.push('/')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-700">Opening registration page...</p>
      </div>
    </div>
  )
}
