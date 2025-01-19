'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContex } from '../components/ProductsContex'

export default function Checkout() {
  const { checkoutProducts, setCheckoutProducts } = useContext(ProductContex)
  const [allCheckoutProducts, setAllCheckoutProducts] = useState([])
  const [fullName, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

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

  let subtotal = 0
  let delivery = 5
  if (checkoutProducts?.length) {
    for (let id of checkoutProducts) {
      const product = allCheckoutProducts.find((p) => p._id === id)
      subtotal += Number(product?.price) ?? 0
    }
  }
  const total = subtotal + delivery

  return (
    <div className='p-5'>
      <h1>Checkout</h1>
      <div>
        {allCheckoutProducts.length &&
          (allCheckoutProducts ?? []).map((product) => {
            const quantity = checkoutProducts.filter((id) => id === product._id).length
            if (quantity < 1) return
            return (
              <div key={product._id} className='flex m-3 max-w-[500px]'>
                <div className='bg-blue-100 p-3  rounded-lg flex justify-center mx-3 shrink-0'>
                  <img src={product.picture} alt='product picture' className='w-24 max-h-40' />
                </div>
                <div>
                  <h3 className='text-xl font-bold'>{product.name}</h3>
                  <p className='text-sm leading-4 text-gray-700'>
                    {product.description} the best you can get in this area at the moment the
                    product is the best you can get in this area at the moment
                  </p>
                  <div className='my-2 flex justify-between items-center'>
                    <div className='text-xl font-bold'>${product?.price}</div>
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
            )
          })}
      </div>

      <form action='/api/checkouts' method='POST' target='_blank'>
        <input
          type='text'
          placeholder='Fullname'
          className='p-3 my-2 w-full border-b-2'
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
          name='fullname'
        />
        <input
          type='email'
          placeholder='Email Address'
          className='p-3 my-2 w-full border-b-2'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name='email'
        />
        <input
          type='text'
          placeholder='Address and City'
          className='p-3 my-2 w-full border-b-2'
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          name='address'
        />
        <input
          type='text'
          placeholder='Country'
          className='p-3 my-2 w-full border-b-2'
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          name='country'
        />

        <div className='m-10 w-1/2 right-0'>
          <div className='flex'>
            <h3 className='grow font-bold text-xl text-gray-600'>Subtotal:</h3>
            <h3 className='font-bold text-xl text-emerald-600'>$ {subtotal}</h3>
          </div>
          <div className='flex'>
            <h3 className='grow font-bold text-xl text-gray-600'>Delivery:</h3>
            <h3 className='font-bold text-xl text-emerald-600'>$ {delivery}</h3>
          </div>
          <div className='flex mt-4 py-3 border-t-4 border-t-green-600 border-dashed'>
            <h3 className='grow font-bold text-xl text-gray-600'>Total:</h3>
            <h3 className='font-bold text-xl text-emerald-600 '>${total}</h3>
          </div>
          <button className='w-full text-center bg-emerald-600 text-white font-bold rounded-lg p-3 shadow-md shadow-black'>
            Pay ${total}
          </button>
        </div>
      </form>
    </div>
  )
}
