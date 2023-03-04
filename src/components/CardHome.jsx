import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import SkeletonImage from './SkeletonImage'

const CardHome = ({ name, logo }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const upScroll = () => {
    window.scroll(0, 0)
  }

  return (
    <article className='flex  min-w-[150px] max-w-[150px] flex-col items-center gap-4 rounded-lg p-5 shadow-md md:w-56  md:max-w-xs md:p-6'>
      <div className='flex  flex-col  items-center  justify-between '>
        {!loading ? (
          <Link to={`/products/${name}`} onClick={upScroll} className=' w-full'>
            <img
            loading='lazy'
              className='h-[100px] max-h-[100px]   w-full rounded-lg object-contain'
              src={logo}
              alt=''
            />
          </Link>
        ) : (
          <SkeletonImage />
        )}
      </div>
    </article>
  )
}

export default CardHome
