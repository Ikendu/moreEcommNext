'use client'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import { initMongoose } from '@/lib/mongoose'
// import { findAllProducts } from '@/pages/api/products'
// import { getServerSideProps } from '@/pages/api/products'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// getServerSideProps()

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProductsInfo(data))
  }, [])

  // await initMongoose()
  // const productsInfo = await findAllProducts()

  const categories = [...new Set(productsInfo?.map((product) => product.category))]

  let filteredProducts
  if (search) {
    filteredProducts = productsInfo.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  } else {
    filteredProducts = productsInfo
  }

  return (
    <Layout>
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
                <div className='flex -mx-5 overflow-x-auto snap-x'>
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
    </Layout>
  )
}

//  for SEO purposes
// we use server side fetching to get the peoducts data and not the client side fetching

// export async function getServerSideProps() {
//   await initMongoose()
//   const productsInfo = await findAllProducts()
//   return {
//     props: { productsInfo: JSON.parse(JSON.stringify(productsInfo)) },
//   }
// }
