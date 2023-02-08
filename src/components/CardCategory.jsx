import React, { useEffect, useState } from 'react'

import Svg from '@/assets/Svg'
import { Link, useParams } from 'react-router-dom'
import SkeletonImage from './SkeletonImage'

const CardCategory = ({ name = 'category', logo, id }) => {
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
      <article className='flex  min-w-[100px] max-w-[150px] flex-col items-center gap-4 rounded-lg p-5 shadow-md lg:w-56  lg:max-w-xs lg:p-6'>
        {!loading ? <Svg className='text-blue-900' /> : <SkeletonImage />}
        <h3 className='text-center capitalize text-gray-900'>{name}</h3>
      </article>
    </Link>
  )
}

export default CardCategory
