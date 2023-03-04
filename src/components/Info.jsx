import React from 'react'
import armado from '@/assets/undraw/armado pc.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Info = () => {
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
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col  py-5 px-5 md:px-0'>
      <h2 className='text-left text-3xl font-bold text-purple-700 '>Nuestros Servicios</h2>
      <article className='flex h-full w-full flex-col items-center justify-start gap-10 p-10 md:flex-row'>
        <div className='flex  items-center justify-start'>
          <img src={armado} alt='' className='max-h-[200px] w-full max-w-xs rounded-full' />
        </div>
        <motion.ul
          initial='hidden'
          animate='visible'
          variants={list}
          className='mr-auto flex w-full flex-col items-start justify-center gap-5'
        >
          <motion.li
            variants={item}
            className='list-disc text-left text-lg font-extralight text-gray-600 '
          >
            Armado de PC a medida
          </motion.li>
          <motion.li
            variants={item}
            className='list-disc text-left text-lg font-extralight text-gray-600 '
          >
            Servicio Tecnico Profesional
          </motion.li>
          <motion.li
            variants={item}
            className='list-disc text-left text-lg font-extralight text-gray-600 '
          >
            Reparacion de PC
          </motion.li>
        </motion.ul>
      </article>
    </section>
  )
}

export default Info
