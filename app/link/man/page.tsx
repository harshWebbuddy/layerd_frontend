"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/auth/about')}>
      About
    </div>
  )
}

export default page