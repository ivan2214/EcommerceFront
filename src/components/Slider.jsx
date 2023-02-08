import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '@/Sources/images'

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const [pointer, setPointer] = useState('rigth')

  const prevImage = () => {
    setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setPointer('left')
  }
  const nextImage = () => {
    setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setPointer('rigth')
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className='relative  overflow-hidden lg:min-h-[50vh] lg:w-full  '>
      <AnimatePresence>
        {images.map((i, indx) => {
          return (
            <>
              {imgIndex === indx && (
                <motion.img
                  key={indx + i}
                  src={images[imgIndex]}
                  initial={{ x: pointer == 'left' ? 300 : -300, opacity: 0.5 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ x: pointer == 'left' ? 300 : -300, opacity: 0.5 }}
                />
              )}
            </>
          )
        })}
      </AnimatePresence>

      <div className='absolute top-0   z-10 flex h-full w-full items-center justify-between '>
        <button onClick={prevImage}>
          <BsArrowLeft className=' mx-5 rounded-full bg-gray-300  text-center text-2xl  text-gray-900' />
        </button>
        <button onClick={nextImage}>
          <BsArrowRight className=' mx-5 rounded-full bg-gray-300  text-center text-2xl  text-gray-900' />
        </button>
      </div>
    </section>
  )
}

export default Slider
