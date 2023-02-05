import React from 'react'
import CardCategory from '@/components/CardCategory'
import categoriesSlice from '@/redux/slices/categories/categoriesSlice'
import { useSelector } from 'react-redux'

const Categories = () => {
  const { categories } = useSelector((s) => s.categories)
  return (
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col gap-10 py-5 px-5 lg:px-0'>
      <h2 className='text-left text-3xl font-bold '>¿Qué estás buscando?</h2>
      <section className='grid h-full w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center  gap-16  py-5'>
        {categories.map((c) => {
          return <CardCategory key={c.id} name={c?.attributes?.name} logo={c.attributes.name} />
        })}
      </section>
    </section>
  )
}

export default Categories
