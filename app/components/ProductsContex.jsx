'use client'
import React, { createContext } from 'react'
import useLocalStorageState from 'use-local-storage-state'

export const ProductContex = createContext({})

export default function ProductsContexProvider({ children }) {
  const [checkoutProducts, setCheckoutProducts] = useLocalStorageState('cart', { defaultValue: [] })
  return (
    <ProductContex.Provider value={{ checkoutProducts, setCheckoutProducts }}>
      {children}
    </ProductContex.Provider>
  )
}
