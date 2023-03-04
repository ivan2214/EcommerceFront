import React, { useEffect, useState } from 'react'

import Svg from '@/assets/Svg'
import { Link, useParams } from 'react-router-dom'
import SkeletonImage from './SkeletonImage'

const CardCategory = ({ name = 'category', image, id }) => {
  const [loading, setLoading] = useState(false)
  const upScroll = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Link to={`/products/category/${name}`} onClick={upScroll}>
      <article className='flex  min-h-[150px] min-w-[150px] max-w-[200px]  flex-col items-center gap-4 rounded-lg p-5 shadow-md md:w-56 md:min-h-max md:max-w-xs md:p-6'>
        {!loading ? <img src={image} className='max-h-[50px] h-full w-full object-contain  max-w-xs' /> : <SkeletonImage />}
        <h3 className='text-center capitalize text-gray-900'>{name}</h3>
      </article>
    </Link>
  )
}

export default CardCategory
