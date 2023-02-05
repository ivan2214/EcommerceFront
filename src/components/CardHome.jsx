import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CardHome = ({ name, logo }) => {
  

  return (
    <article className='flex  min-w-[150px] max-w-[150px] p-5 flex-col items-center gap-4 rounded-lg shadow-md lg:w-56  lg:max-w-xs lg:p-6'>
      <div className='flex  flex-col  items-center  justify-between '>
        <Link to={`/products/${name}`} className=' w-full'>
          <img
            className='h-[100px] max-h-[100px]   w-full rounded-lg object-contain'
            src={logo}
            alt=''
          />
        </Link>
      </div>
    </article>
  )
}

export default CardHome
