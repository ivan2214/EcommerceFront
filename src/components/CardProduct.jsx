import { addCartProductAsync } from '@/redux/slices/cart/thunk'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { formatAsARS } from '@/utils/formatNumber'
import { Link } from 'react-router-dom'
import SkeletonImage from './SkeletonImage'

const CardProduct = ({ title, description, price, image, id }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const addCart = () => {
    console.log('añadido')
    dispatch(addCartProductAsync(id))
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <article className='h-full rounded-md lg:max-h-[700px] lg:min-h-[500px] lg:w-96 lg:max-w-xs '>
      <div className='flex h-full flex-col  items-center  justify-between '>
        {!loading ? (
          <Link to={`/product/${id}`} className=' w-full'>
            <img
            loading='lazy'
              className='h-[150px] min-w-[208px] mx-auto max-h-[200px]  min-h-[50px] w-full rounded-md object-cover'
              src={image}
              alt={description}
            />
          </Link>
        ) : (
          <SkeletonImage w="384px" />
        )}
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize text-purple-700'>{title}</h3>
            <p className='py-5 text-left text-base font-light'>
              {description.length > 150 ? description.slice(0, 150) + '...' : description}
            </p>
            <span>{formatAsARS(price)}</span>
            <span className='rounded-full bg-purple-700 px-5 text-white'>En stock.</span>
          </div>
          <Link
            to='/pay'
            className='w-full rounded-full bg-purple-700 py-2 text-center text-xl font-bold text-gray-100 transition-all duration-300 hover:bg-purple-400 hover:text-white '
          >
            Comprar
          </Link>
          <button
            onClick={() => addCart(id)}
            className='w-full rounded-full border border-purple-700 py-2 text-center text-xl font-bold text-purple-700 transition-all duration-300 hover:bg-purple-700/70 hover:text-white '
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardProduct
