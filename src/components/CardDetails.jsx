import { formatAsARS } from '@/utils/formatNumber'
import React from 'react'

const CartDetails = ({ id, title, description, price, quantity, images, categories }) => {
  return (
    <article className='flex h-full w-full  justify-center gap-10 bg-white  p-24'>
      <div className='flex h-full flex-col  items-start justify-between gap-5'>
        {images?.data?.map((i, index) => {
          return (
            <div
              key={id}
              className='flex h-24 w-24 items-center rounded-md bg-gray-500 object-cover'
            >
              <img
                className=' w-full rounded-md object-cover'
                /* src={`http://localhost:1337${i?.attributes?.url} `} */
                src={`https://ecommercestrapi-back-production.up.railway.app${i?.attributes?.url} `}
                alt=''
              />
            </div>
          )
        })}
      </div>
      <section className='flex h-full min-h-[200px] w-full max-w-3xl rounded-md  '>
        <img
          className='  h-full  min-h-[100px] w-full rounded-md object-cover'
          /* src={`http://localhost:1337${dataImage[0].attributes.url} `} */
          src={`https://ecommercestrapi-back-production.up.railway.app${images?.data[0]?.attributes?.url} `}
          alt={description}
        />
      </section>
      <section className=' w-full max-w-3xl'>
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize text-green-600'>{title && title}</h3>
            <p className='py-5 text-left text-base font-light'>
              {description?.length > 150 ? description?.slice(0, 150) + '...' : description}
            </p>
            <span>{formatAsARS(price)}</span>
            <span className='rounded-full bg-green-500 px-5 text-white'>
              {quantity > 0 && 'En stock.'}
            </span>
          </div>

          <button
            onClick={() => addCart(product, id)}
            className='w-full rounded-full border border-green-500 py-2 text-center text-xl font-bold text-green-600'
          >
            Agregar
          </button>
        </div>
      </section>
    </article>
  )
}

export default CartDetails
