import React from 'react'
import { useSelector } from 'react-redux'
import CardHome from './CardHome'
import { motion } from 'framer-motion'

const Marcas = () => {
  const { brands } = useSelector((s) => s.brands)

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
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col gap-10  py-5'>
      <h2 className='text-left text-3xl font-bold text-purple-700 '>Las mejores marcas para vos</h2>
      <motion.section
        initial='hidden'
        animate='visible'
        variants={list}
        className='grid h-full w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center  gap-8 py-5  lg:gap-16'
      >
        {brands ? (
          brands.map(({ id, attributes }, i) => {
            return (
              <motion.div key={id} variants={item}>
                <CardHome
                  id={id}
                  name={attributes?.name}
                  /* logo={`http://localhost:1337${attributes?.logo?.data[0]?.attributes?.url} `} */
                  logo={`https://ecommercestrapi-back-production.up.railway.app${attributes?.logo?.data[0]?.attributes?.url} `}
                />
              </motion.div>
            )
          })
        ) : (
          <p>cargando marcas ....</p>
        )}
      </motion.section>
    </section>
  )
}

export default Marcas
