'use client'
import dynamic from 'next/dynamic'
// import Checkout from './Checkout'

const Checkout = dynamic(() => import('./Checkout'), { ssr: false })

export default function page() {
  return (
    <div>
      <Checkout />
    </div>
  )
}
