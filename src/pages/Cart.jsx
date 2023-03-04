import React from 'react'
import ProductsCart from '@/components/ProductsCart'

const Cart = () => {
  return (
    <main className='mx-auto min-h-screen w-full max-w-screen-xl bg-slate-100 text-gray-900'>
      <section className='md:flex md:flex-col md:justify-center md:gap-10'>
        <ProductsCart />
      </section>
    </main>
  )
}

export default Cart
