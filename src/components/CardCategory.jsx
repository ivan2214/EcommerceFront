import React from 'react'

import Svg from '@/assets/Svg'
import { Link, useParams } from 'react-router-dom'

const CardCategory = ({ name = 'category', logo, id }) => {
  return (
    <Link to={`/products/category/${name}`}>
      <article className='flex  min-w-[100px] max-w-[150px] p-5 flex-col items-center gap-4 rounded-lg shadow-md lg:w-56  lg:max-w-xs lg:p-6'>
        <Svg className='text-blue-900' />
        <h3 className='capitalize text-center text-gray-900'>{name}</h3>
      </article>
    </Link>
  )
}

export default CardCategory
