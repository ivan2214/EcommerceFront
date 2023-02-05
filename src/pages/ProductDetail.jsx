import CartDetails from '@/components/CardDetails'
import Loading from '@/components/Loading'
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
      {loading ? (
        <div className='flex items-center justify-center h-screen w-full'>
          <Loading />
        </div>
      ) : (
        <CartDetails
          id={productDetail?.id}
          title={productDetail?.attributes?.title}
          description={productDetail?.attributes?.description}
          price={productDetail?.attributes?.price}
          quantity={productDetail?.attributes?.quantity}
          images={productDetail?.attributes?.images}
          categories={productDetail?.attributes?.categories}
        />
      )}
    </>
  )
}

export default ProductDetail
