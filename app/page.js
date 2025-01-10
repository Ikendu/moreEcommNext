'use client'
import Product from '@/components/Product'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProductsInfo(data))
  }, [])

  console.log(productsInfo)
  const categories = [...new Set(productsInfo.map((product) => product.category))]

  return (
    <div className='p-5'>
      <div>
        {categories.map((category, idx) => (
          <div key={idx}>
            <h2 className=' font-bold text-2xl capitalize'>{category}</h2>
            {productsInfo
              .filter((product) => product.category === category)
              .map((product, idx) => (
                <dv key={idx}>
                  <Product {...product} />
                </dv>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
