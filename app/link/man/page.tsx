import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <Link href={'/auth/about'}>About</Link>
    </div>
  )
}

export default page