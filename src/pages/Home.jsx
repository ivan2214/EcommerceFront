import React, { useEffect } from 'react'
import Slider from '@/components/Slider'
import Destacados from '@/components/Destacados'
import Categories from '@/components/Categories'
import Marcas from '@/components/Marcas'
import Info from '@/components/Info'

const Home = () => {
  return (
    <main className='m-0 mx-auto min-h-screen w-full max-w-screen-xl overflow-hidden bg-slate-100 p-0 text-gray-900'>
      <Slider />
      <Info />
      <Categories />
      <Marcas />
    </main>
  )
}

export default Home
