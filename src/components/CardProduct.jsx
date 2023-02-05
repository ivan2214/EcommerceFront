import { addCartProductAsync } from '@/redux/slices/cart/thunk'
import React from 'react'
import { useDispatch } from 'react-redux'

import { formatAsARS } from '@/utils/formatNumber'
import { Link } from 'react-router-dom'

const CardProduct = ({ title, description, price, image, id }) => {
  const dispatch = useDispatch()

  const addCart = () => {
    console.log('añadido')
    dispatch(addCartProductAsync(id))
  }

  return (
    <article className='h-full rounded-md lg:min-h-[400px] lg:w-96 lg:max-w-xs '>
      <div className='flex h-full flex-col  items-center  justify-between '>
        <Link to={`/product/${id}`} className=' w-full'>
          <img
            className='h-[150px] max-h-[150px]  min-h-[100px] w-full rounded-md object-contain'
            src={image}
            alt={description}
          />
        </Link>
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize text-green-500'>{title}</h3>
            <p className='py-5 text-left text-base font-light'>
              {description.length > 150 ? description.slice(0, 150) + '...' : description}
            </p>
            <span>{formatAsARS(price)}</span>
            <span className='rounded-full bg-green-500 px-5 text-white'>En stock.</span>
          </div>
          <Link
            to='/pay'
            className='w-full rounded-full bg-green-400 py-2 text-center text-xl font-bold text-gray-100'
          >
            Comprar
          </Link>
          <button
            onClick={() => addCart(id)}
            className='w-full rounded-full border border-green-400 py-2 text-center text-xl font-bold text-green-400'
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardProduct
