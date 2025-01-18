'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContex } from '../components/ProductsContex'

export default function Page() {
  const [allCheckoutProducts, setAllCheckoutProducts] = useState([])
  const { checkoutProducts } = useContext(ProductContex)
  const uniqueIds = [...new Set(checkoutProducts)]

  useEffect(() => {
    fetch('/api/products?ads=' + checkoutProducts.join(','))
      .then((res) => res.json())
      .then((data) => setAllCheckoutProducts(data))
  }, [checkoutProducts])
  return (
    <div className='p-5'>
      {!allCheckoutProducts.length ? (
        <div>No pruduct in your cart</div>
      ) : (
        allCheckoutProducts.map((product, idx) => <div key={idx}>{product.name}</div>)
      )}
    </div>
  )
}
