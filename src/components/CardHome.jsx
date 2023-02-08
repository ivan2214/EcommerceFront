import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CardHome = ({ name, logo }) => {
  const upScroll = () => {
    window.scroll(0)
  }

  return (
    <article className='flex  min-w-[150px] max-w-[150px] flex-col items-center gap-4 rounded-lg p-5 shadow-md lg:w-56  lg:max-w-xs lg:p-6'>
      <div className='flex  flex-col  items-center  justify-between '>
        <Link to={`/products/${name}`} onClick={upScroll} className=' w-full'>
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
