import React from 'react'
import AllProducts from '@/components/AllProducts'
import Filters from '@/components/Filters'

const Products = () => {
  return (
    <main className='mx-auto min-h-screen w-full max-w-screen-xl  overflow-hidden bg-slate-100 text-gray-900'>
      <section className='flex flex-col justify-center md:flex-row'>
        <Filters />
        <AllProducts />
      </section>
    </main>
  )
}

export default Products
