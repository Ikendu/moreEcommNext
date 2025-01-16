import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' sticky'>
      <Link href={'/'}>Home</Link>
      <Link href={'/checkout'}>checkout</Link>
    </div>
  )
}
