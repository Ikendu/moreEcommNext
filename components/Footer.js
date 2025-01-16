import CheckoutIcon from '@/app/icons/CheckoutIcon'
import HomeIcon from '@/app/icons/HomeIcon'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' sticky p-5 border-t border-t-gray-400 flex gap-4 items-center justify-center w-full'>
      <Link href={'/'} className='flex gap-2'>
        <HomeIcon /> Home
      </Link>
      <Link href={'/checkout'} className='flex gap-2'>
        <CheckoutIcon /> checkout
      </Link>
    </div>
  )
}
