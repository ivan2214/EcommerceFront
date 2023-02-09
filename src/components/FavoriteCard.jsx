import { addCartProductAsync } from '@/redux/slices/cart/thunk'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { formatAsARS } from '@/utils/formatNumber'
import { Link } from 'react-router-dom'
import SkeletonImage from './SkeletonImage'
import { motion } from 'framer-motion'
import { getTotals } from '@/redux/slices/cart/cartSlice'
import { clearDetailProductState } from '@/redux/slices/product/productSlice'
import { addFavorite, deleteFavorite } from '@/redux/slices/products/productsSlice'
import SvgCorazon from '@/Icons/SvgCorazon'

const FavoriteCard = ({ title, price, stock, description, image, id }) => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((s) => s.cart)
  const { favorites } = useSelector((s) => s.products)
  const [loading, setLoading] = useState(false)

  const conditionFav = favorites?.findIndex((f) => f.id === id)

  const addCart = () => {
    dispatch(addCartProductAsync(id))
  }

  const clearDetailState = () => {
    dispatch(clearDetailProductState())
  }

  const deleteFavoriteProduct = (id) => {
    const index = favorites.findIndex((p) => p.id == id)

    if (index >= 0) return dispatch(deleteFavorite(id))
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems])

  return (
    <article className='mx-auto h-full w-full max-w-screen-xl bg-white p-10 shadow-lg'>
      <div className='flex h-full w-full flex-col lg:flex-row lg:items-center lg:justify-start lg:gap-5 '>
        {/* imagen */}
        <section className='flex items-center justify-center lg:items-center lg:justify-center'>
          <Link to={`/product/${id}`} onClick={clearDetailState}>
            <img src={image} alt='' className='max-w-[100px] rounded-full object-contain' />
          </Link>
        </section>
        {/* informacion */}
        <section className='flex h-full w-full flex-col gap-5 lg:flex-row'>
          {/* info */}
          <div className='flex flex-col items-start gap-5 text-gray-900'>
            <h2 className='max-w-lg text-lg font-bold'>{title}</h2>
            <p className=' text-left text-base font-light lg:max-w-2xl'>
              {description.length > 250 ? description.slice(0, 300) + '...' : description}
            </p>
            <span className='border border-purple-600 py-1 px-2 text-xl font-bold text-purple-600'>
              {formatAsARS(price)}
            </span>
          </div>
          {/* btns */}
          <div className='flex flex-col-reverse items-start justify-start gap-5 lg:w-fit lg:flex-col'>
            <div className='flex w-full flex-col gap-2 lg:ml-auto lg:flex-row lg:items-start lg:justify-start'>
              <button className='w-full min-w-full max-w-full rounded-full border border-purple-600/80 px-8 py-1 text-purple-600 transition-all duration-300 ease-linear hover:bg-purple-600 hover:text-white lg:min-w-[200px]'>
                Comprar Ahora
              </button>

              <button
                onClick={() => addCart(id)}
                className='w-full min-w-full max-w-full rounded-full border border-purple-600/80 px-8 py-1 text-purple-600 transition-all duration-300 ease-linear hover:bg-purple-600 hover:text-white lg:min-w-[200px]'
              >
                Agregar Al Carrito
              </button>
            </div>
            <div className='flex w-full flex-col items-start justify-center lg:w-fit lg:flex-row'>
              <button
                onClick={() => deleteFavoriteProduct(id)}
                className='w-full min-w-full max-w-full   rounded-full bg-red-600/80 px-8 py-1 text-white transition-all duration-300 ease-linear hover:bg-red-300  lg:min-w-[200px] lg:max-w-[250px]'
              >
                Eliminar de favoritos
              </button>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

export default FavoriteCard
