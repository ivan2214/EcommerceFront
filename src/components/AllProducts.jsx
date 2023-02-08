import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from './CardProduct'
import Loading from './Loading'
import Skeleton from './Skeleton'

const AllProducts = () => {
  const { products } = useSelector((s) => s.products)
  const { loading } = useSelector((s) => s.products)

  return (
    <section className='lg:max-w-5 xl  lg:mx-auto lg:min-h-screen  lg:py-5'>
      <section className='grid h-full w-full  grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-x-4 gap-y-16 overflow-hidden bg-gray-100  px-5 shadow-sm  lg:grid-cols-3'>
        {products.length && !loading ? (
          <>
            {products.map((p) => {
              return (
                <CardProduct
                  key={p.id}
                  title={p?.attributes?.title}
                  description={p?.attributes?.description}
                  price={p?.attributes?.price}
                  /* image={`http://localhost:1337${p?.attributes?.images?.data[0]?.attributes?.url} `} */
                  image={`https://ecommercestrapi-back-production.up.railway.app${p?.attributes?.images?.data[0]?.attributes?.url} `}
                  id={p.id}
                />
              )
            })}
          </>
        ) : (
          <>
            {!products.length ? (
              <div>
                <p>Lo sentimos no contamos con esos productos</p>
              </div>
            ) : (
              <>
                {products.map((p) => (
                  <Skeleton key={p.id} />
                ))}
              </>
            )}
          </>
        )}
      </section>
    </section>
  )
}

export default AllProducts
