'use client'
import Product from '@/components/Product'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProductsInfo(data))
  }, [])

  const categories = [...new Set(productsInfo.map((product) => product.category))]

  let filteredProducts
  if (search) {
    filteredProducts = productsInfo.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  } else {
    filteredProducts = productsInfo
  }

  return (
    <div className='p-5'>
      <input
        type='text'
        placeholder='Search for products'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-[50%] p-2 border border-gray-300 rounded-lg mb-5'
      />
      <div>
        {categories.map((category, idx) => (
          <div key={idx}>
            {filteredProducts.find((p) => p.category === category) && (
              <>
                <h2 className=' font-bold text-2xl capitalize'>{category}</h2>
                <div className='flex -mx-5 overflow-x-auto '>
                  {filteredProducts
                    .filter((product) => product.category === category)
                    .map((product, idx) => (
                      <dv key={idx} className='snap-start'>
                        <Product {...product} />
                      </dv>
                    ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

//  for SEO purposes
// we use server side fetching to get the peoducts data and not the client side fetching
