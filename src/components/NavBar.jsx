import React, { useState } from 'react'
import img from '@/assets/marca.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { searchProductAsync } from '@/redux/slices/products/thunk'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const { cartTotalQuantity } = useSelector((s) => s.cart)

  const handleSearch = (query) => {
    setQuery(query.value)
    dispatch(searchProductAsync(query.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchProductAsync(query))
    navigate('/products')
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className='sticky top-0  right-0 z-50 bg-green-400
        text-white transition-all
      duration-500 ease-linear'
      >
        <div
          className={`flex h-auto w-full items-start bg-green-400 px-5 py-3  transition-all duration-500 ease-linear lg:hidden `}
        >
          {!open ? (
            <button className=' w-full text-white' onClick={() => setOpen(!open)}>
              <AiOutlineMenu size={30} />
            </button>
          ) : (
            <button className=' w-full text-white' onClick={() => setOpen(!open)}>
              <AiOutlineClose size={30} />
            </button>
          )}
        </div>
      </div>
      <header
        id='navbar'
        className={` ${
          !open ? 'h-0 -translate-x-[100%] bg-green-400' : 'h-[50vh] translate-x-[0%] bg-green-400'
        } sticky top-0
        
      z-50
      mx-auto w-full max-w-screen-xl    flex-col    gap-5 bg-green-400 py-1 px-5 shadow-lg transition-all  duration-700 ease-linear  lg:flex lg:h-max lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between`}
      >
        <Link to='/' className=''>
          <img
            className='mb-5 hidden max-h-12 w-full object-cover transition-all  duration-500  ease-linear hover:origin-top hover:rotate-12 lg:flex lg:max-h-[50px]'
            src={img}
            alt=''
          />
        </Link>

        <form onSubmit={handleSubmit} className='flex items-center justify-center gap-5 lg:mx-auto'>
          <input
            type='search'
            onChange={({ target }) => handleSearch(target)}
            className='rounded-lg border border-gray-400 px-5 py-1 text-gray-900 outline-none transition-all duration-500 '
            placeholder='Buscar..'
            name=''
            id=''
          />
          <AiOutlineSearch className='cursor-pointer text-2xl text-white transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
        </form>

        <nav className=''>
          <ul className='flex flex-col items-center justify-between gap-12   pt-5 lg:flex-row lg:items-center lg:justify-center lg:gap-5 lg:p-3'>
            <Link to='/favorite'>
              <li className='flexr flex items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500'>
                <MdOutlineFavoriteBorder className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                favoritos
              </li>
            </Link>
            <Link to='/products'>
              <li className='flexr flex items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500'>
                <FaStoreAlt className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                Tienda
              </li>
            </Link>
            <Link to='/account'>
              <li className='flexr flex items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500'>
                <AiOutlineUser className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                Cuenta
              </li>
            </Link>
            <Link to='/cart' className=''>
              <li className='rela duration-500 lg:relative flex select-none  items-center gap-3 font-sans text-lg font-semibold text-white transition-all hover:text-gray-500'>
                <AiOutlineShoppingCart className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                <span className='text-teal-300 lg:absolute lg:top-[-15px] lg:right-[-7px]  lg:z-20'>
                  {cartTotalQuantity}
                </span>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
