import React from 'react'
import CardCategory from '@/components/CardCategory'
import categoriesSlice from '@/redux/slices/categories/categoriesSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
const Categories = () => {
  const { categories } = useSelector((s) => s.categories)

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        staggerDirection: 1,
        delayChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col gap-10 py-5 px-5 lg:px-0'>
      <h2 className='text-left text-3xl font-bold text-purple-700 '>¿Qué estás buscando?</h2>
      <motion.section
        initial='hidden'
        animate='visible'
        variants={list}
        className='grid h-full w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center  gap-16  py-5'
      >
        {categories.map((c, i) => {
          return (
            <motion.div key={`${c.id}${i}`} variants={item}>
              <CardCategory
                name={c?.attributes?.name}
                image={`https://ecommercestrapi-back-production.up.railway.app${c?.attributes?.image?.data[0]?.attributes?.url} `}
              />
            </motion.div>
          )
        })}
      </motion.section>
    </section>
  )
}

export default Categories
