import React, { useEffect } from 'react'
import Slider from '@/components/Slider'
import Destacados from '@/components/Destacados'
import Categories from '@/components/Categories'
import Marcas from '@/components/Marcas'


const Home = () => {

  return (
    <main className='min-h-screen overflow-hidden w-full max-w-7xl mx-auto bg-slate-100 text-gray-900'>
      <Slider />
      {/*  <Destacados /> */}
      <Categories />
      <Marcas />
    </main>
  )
}

export default Home
