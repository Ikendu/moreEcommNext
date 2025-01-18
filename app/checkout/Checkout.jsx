'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContex } from '../components/ProductsContex'

export default function Checkout() {
  const { checkoutProducts, setCheckoutProducts } = useContext(ProductContex)
  const [allCheckoutProducts, setAllCheckoutProducts] = useState([])

  useEffect(() => {
    const uniqueIds = [...new Set(checkoutProducts)]
    fetch('/api/products?ids=' + uniqueIds.join(','))
      .then((res) => res.json())
      .then((data) => setAllCheckoutProducts(data))
  }, [checkoutProducts])

  function moreOfThisProduct(id) {
    setCheckoutProducts((prev) => [...prev, id])
  }
  function lessOfThisProduct(id) {
    const pos = checkoutProducts.indexOf(id)
    if (pos > -1) {
      setCheckoutProducts((prev) => prev.filter((id, indx) => indx !== pos))
    }
  }

  return (
    <div className='p-5'>
      <h1>Checkout</h1>
      <div>
        {allCheckoutProducts.length &&
          (allCheckoutProducts ?? []).map((product) => (
            <div key={product._id} className='flex m-3 max-w-[500px]'>
              <div className='bg-blue-100 p-3  rounded-lg flex justify-center mx-3 shrink-0'>
                <img src={product.picture} alt='product picture' className='w-24 max-h-40' />
              </div>
              <div>
                <h3 className='text-xl font-bold'>{product.name}</h3>
                <p className='text-sm leading-4 text-gray-700'>
                  {product.description} + 'the best you can get in this area at the moment the
                  product is the best you can get in this area at the moment'
                </p>
                <div className='my-2 flex justify-between items-center'>
                  <div className='text-xl font-bold'>${product.price}</div>
                  <div className='flex gap-2 justify-center items-center'>
                    <button
                      onClick={() => lessOfThisProduct(product._id)}
                      className='bg-emerald-600 text-white py-1 px-3 rounded-xl'
                    >
                      -
                    </button>
                    <div className='mx-2 text-lg'>
                      {checkoutProducts.filter((id) => id === product._id).length}
                    </div>
                    <button
                      onClick={() => moreOfThisProduct(product._id)}
                      className='bg-emerald-600 text-white py-1 px-3 rounded-xl'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <form action=''>
          <input
            type='text'
            placeholder='Fullname'
            className='p-3 my-2 w-full border-b-2'
            onChange={(e) => setFullname(e.target.value)}
            value={fullName}
          />
          <input
            type='text'
            placeholder='Address and City'
            className='p-3 my-2 w-full border-b-2'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <input
            type='text'
            placeholder='Country'
            className='p-3 my-2 w-full border-b-2'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <input
            type='email'
            placeholder='Email Address'
            className='p-3 my-2 w-full border-b-2'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </form>
      </div>
    </div>
  )
}
