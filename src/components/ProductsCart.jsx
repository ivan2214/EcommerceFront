import { formatAsARS } from '@/utils/formatNumber'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '@/redux/slices/cart/cartSlice'

import { Link } from 'react-router-dom'
import ButtonLoading from './ButtonLoading'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [procesCompra, setProcesCompra] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const text =
    `Hola! Te paso mi pedido: 
  ${cart.cartItems.reduce(
    (message, item) =>
      message.concat(
        `\n* Nombre del Producto: ${item.attributes.title}  \n\n * Cantidad: ${item.cartQuantity}
        \n* Precio por unidad: \n ${formatAsARS(item.attributes.price)}
        \n* Precio en total por cantidad: \n ${formatAsARS(
          item.attributes.price * item.cartQuantity,
        )}
         \n\n -------------*------------
        `,
      ),
    ``,
  )}
  ` + `\n *Total: ${formatAsARS(cart.cartTotalAmount)}`

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const purchaseCart = async () => {
    setProcesCompra(true)
    /* window.open(`https://wa.me/3812516597?text=${encodeURIComponent(text)}`) */
    setTimeout(() => setProcesCompra(false), 1000)
  }

  return (
    <div className=' overflow-hidden lg:flex lg:flex-col lg:gap-10 lg:px-8 lg:py-5'>
      <h2 className='p-10 text-center text-4xl font-bold  text-green-500 lg:p-0'>
        Carrito de Compras
      </h2>
      {cart.cartItems.length === 0 ? (
        <div className='p-5'>
          <p>Your cart is currently empty</p>
          <div className='start-shopping'>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-arrow-left'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className=' gap-5 lg:flex lg:flex-col lg:gap-5'>
          <div className='flex w-full  items-center justify-between gap-x-2'>
            <h3 className='mb-5 px-4 text-lg font-bold uppercase  text-green-500 lg:p-0'>
              Productos
            </h3>
          </div>

          <div className='flex flex-col gap-10 lg:flex lg:flex-col  '>
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                /* container principal de la card */
                <div
                  className='flex flex-col gap-10 border-b-2 border-gray-400 py-5 lg:flex lg:flex-row lg:items-center lg:justify-between lg:py-5 '
                  key={cartItem?.id}
                >
                  {/* imagen y titulo */}
                  <div className='flex flex-col gap-5 lg:flex-row'>
                    <img
                      className='
                      m-auto
                      max-h-[150px] w-full 
                      object-contain
                      lg:m-auto lg:mr-5 lg:w-[100px] lg:max-w-full lg:object-cover'
                      /* src={`http://localhost:1337${cartItem?.attributes?.images.data[0].attributes.url}`} */
                      src={`https://ecommercestrapi-back-production.up.railway.app${cartItem?.attributes?.images?.data[0]?.attributes?.url}`}
                      alt={cartItem?.attributes?.title}
                    />
                    {/* titulo */}
                    <div className='flex flex-col gap-10 lg:w-fit lg:flex-col lg:items-start  lg:gap-5'>
                      <h3 className='max-w-xs px-5 lg:max-w-[200px] lg:text-base '>
                        {cartItem?.attributes?.title}
                      </h3>
                      <button
                        className='w-full bg-red-500 py-2 text-white lg:rounded-full lg:px-2 lg:py-1'
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {/* price */}
                  <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-base font-bold  uppercase '>Precio</h3>
                    <p className='text-base font-light'>
                      {formatAsARS(cartItem?.attributes?.price)}
                    </p>
                  </div>
                  {/* quantity */}
                  <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-base font-bold  uppercase '>Cantidad</h3>
                    <div className='flex w-[130px] max-w-full items-start justify-center gap-10 rounded-md bg-white px-5 py-1 shadow-lg'>
                      <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <div className=''>{cartItem?.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>+</button>
                    </div>
                  </div>
                  {/* total */}
                  <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-base font-bold  uppercase '>Total</h3>
                    <p>{formatAsARS(cartItem?.attributes?.price * cartItem?.cartQuantity)}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className='flex p-10 flex-col-reverse lg:flex-row items-center lg:items-stretch justify-center gap-10  bg-gray-100 lg:p-4 lg:justify-between'>
            <div className=' lg:p-5'>
              <button
                className='w-full rounded-md bg-green-500 py-2 px-8 text-white transition-all duration-300 ease-linear hover:bg-green-700'
                onClick={() => handleClearCart()}
              >
                Vaciar Carrito
              </button>
            </div>
            <div className='flex max-w-full flex-col gap-3  lg:p-5'>
              <div className='flex justify-between gap-5'>
                <span className='text-2xl font-bold text-green-500'>Total a pagar</span>
                <span className='text-xl font-bold'>{formatAsARS(cart.cartTotalAmount)}</span>
              </div>

              <p className='text-base font-light'>
                Impuestos y gastos de envío calculados al finalizar la compra
              </p>

              {procesCompra ? (
                <ButtonLoading />
              ) : (
                <a
                  href={`https://wa.me/3812516597?text=${encodeURIComponent(text)}`}
                  target='_blank'
                  onClick={purchaseCart}
                  className='rounded-md cursor-pointer bg-green-400 px-8 py-2 text-white transition-all duration-300 ease-linear hover:bg-green-700 text-center'
                >
                  Seguir Compra en Wp
                </a>
              )}
              <div className='flex text-gray-400'>
                <Link
                  to='/'
                  className='flex gap-5 text-gray-400 transition-all duration-300 ease-linear hover:text-gray-800 p-5 lg:p-0'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-arrow-left'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                    />
                  </svg>
                  <span>Seguir comprando</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
