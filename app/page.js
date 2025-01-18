'use client'
import Product from '@/app/components/Product'
import { initMongoose } from '@/lib/mongoose'
// import { findAllProducts } from '@/pages/api/products'
// import { getServerSideProps } from '@/pages/api/products'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { ProductContex } from './components/ProductsContex'

// getServerSideProps()

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])
  const [search, setSearch] = useState('')
  const { checkoutProducts } = useContext(ProductContex)
  console.log(checkoutProducts)

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
                <div className='flex -mx-5 overflow-x-auto snap-x'>
                  {filteredProducts
                    .filter((product) => product.category === category)
                    .map((product, idx) => (
                      <div key={idx} className='snap-start'>
                        <Product {...product} />
                      </div>
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

// export async function getServerSideProps() {
//   await initMongoose()
//   const productsInfo = await findAllProducts()
//   return {
//     props: { productsInfo: JSON.parse(JSON.stringify(productsInfo)) },
//   }
// }
