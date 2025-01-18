'use client'
import CheckoutIcon from '@/app/icons/CheckoutIcon'
import HomeIcon from '@/app/icons/HomeIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, { useContext } from 'react'
import { ProductContex } from './ProductsContex'

export default function Footer() {
  const { checkoutProducts } = useContext(ProductContex)
  const path = usePathname()
  console.log({ path })

  return (
    <footer className='sticky bottom-0 p-5 flex gap-10 items-center justify-center w-full bg-slate-300'>
      <Link
        href={'/'}
        className={(path === '/' ? 'text-emerald-500' : '') + ' flex flex-col items-center'}
      >
        <HomeIcon /> Home
      </Link>
      <Link
        href={'/checkout'}
        className={(path === '/checkout' ? 'text-emerald-500' : '') + ' flex flex-col items-center'}
      >
        <div className='w-2'>
          <CheckoutIcon />
        </div>
        <div>checkout {checkoutProducts?.length}</div>
      </Link>
    </footer>
  )
}
