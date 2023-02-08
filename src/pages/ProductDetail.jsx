import CartDetails from '@/components/CardDetails'
import Loading from '@/components/Loading'
import Reviews from '@/components/Reviews'
import { getAsyncProductDetail } from '@/redux/slices/product/thunk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { productDetail } = useSelector((s) => s.productDetail)
  const { loading } = useSelector((s) => s.products)
  console.log(productDetail)

  useEffect(() => {
    dispatch(getAsyncProductDetail(id))
  }, [id])

  return (
    <>
      {loading || !productDetail ? (
        <div className='flex h-screen w-full items-center justify-center'>
          <Loading />
        </div>
      ) : (
        <article className='mx-auto flex h-full  w-full max-w-6xl flex-col justify-center gap-10 border border-white  bg-white shadow-2xl   lg:p-24'>
          <CartDetails
            id={productDetail?.id}
            title={productDetail?.attributes?.title}
            description={productDetail?.attributes?.description}
            price={productDetail?.attributes?.price}
            quantity={productDetail?.attributes?.quantity}
            images={productDetail?.attributes?.images}
            categories={productDetail?.attributes?.categories}
            loading={loading}
          />
          <Reviews />
        </article>
      )}
    </>
  )
}

export default ProductDetail
