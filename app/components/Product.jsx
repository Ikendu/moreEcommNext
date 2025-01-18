'use client'

import { useContext } from 'react'
import { ProductContex } from './ProductsContex'

export default function Product({ _id, name, price, description, picture }) {
  const { setCheckoutProducts } = useContext(ProductContex)

  function handleSelectedProduct() {
    setCheckoutProducts((prev) => [...prev, _id])
  }
  return (
    <div>
      <div className='py-5 mx-5 w-72'>
        <div className=' '>
          <div className='bg-blue-100 p-5 rounded-lg flex justify-center '>
            <img src={picture} alt='Iphone' className='max-h-60 ' />
          </div>
          <div className='font-bold text-lg my-2'>
            <h3>{name}</h3>
          </div>
          <p className='text-sm'>{description}</p>
          <div className='my-2 flex'>
            <div className='grow text-xl font-bold'>${price}</div>
            <button
              onClick={handleSelectedProduct}
              className='bg-emerald-600 text-white py-1 px-3 rounded-xl'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
