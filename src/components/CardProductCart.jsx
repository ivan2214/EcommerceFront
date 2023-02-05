import React, { useState } from 'react'

import { formatAsARS } from '@/utils/formatNumber'

const CardProductCart = ({ titulo, img, price, id, quantity, cartQuantity }) => {
  console.log(quantity)
  const [cantidad, setCantidad] = useState(0)

  const handleDelete = (id) => {
    setCantidad((prev) => (prev >= 1 ? prev - 1 : prev))
  }
  const handleAddProduct = (id) => {
    setCantidad((prev) => (quantity < prev ? prev + 1 : prev))
  }
  console.log(cantidad === quantity && cantidad)

  return (
    <article className='  px-5 text-gray-900'>
      <div className='flex flex-row items-center justify-between gap-5'>
        <div className='flex   items-center justify-center gap-5'>
          <div className='flex h-24 w-36 items-center rounded-md bg-gray-500 object-cover p-5'>
            <img className=' h-full w-full rounded-md object-cover' src={img} alt='' />
          </div>
          <div className='flex w-full flex-col items-start   gap-4 '>
            <h3>{titulo}</h3>
            <span>{formatAsARS(price)}</span>
            <span>Unidades: {cartQuantity}</span>
          </div>
        </div>

        <div className='flex items-center justify-center  gap-5'>
          <button
            onClick={() => handleDelete(id)}
            className='mx-auto w-fit rounded-md border  border-blue-300 px-4 py-1 text-gray-900'
          >
            -
          </button>
          <span className='mx-auto w-fit rounded-md border  border-blue-300 px-4 py-1 text-gray-900'>
            {cantidad}
          </span>
          <button
            onClick={() => handleAddProduct(id)}
            className='mx-auto w-fit rounded-md border  border-blue-300 px-4 py-1 text-gray-900'
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardProductCart
