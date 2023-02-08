import React, { useState } from 'react'
import img from '@/assets/marca.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from 'react-icons/ai'
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

  const upScroll = () => {
    window.scroll(0, 0)
  }

  return (
    <>
      <div
        className='sticky top-0  right-0 z-50 flex
        items-center justify-between
      overflow-hidden bg-gray-900 text-white transition-all duration-500 ease-linear'
      >
        <div
          className={`flex h-auto w-full items-start bg-gray-900 px-5 py-3  transition-all duration-500 ease-linear lg:hidden `}
        >
          {!open ? (
            <button className=' text-white' onClick={() => setOpen(!open)}>
              <AiOutlineMenu size={30} />
            </button>
          ) : (
            <button className=' text-white' onClick={() => setOpen(!open)}>
              <AiOutlineClose size={30} />
            </button>
          )}
        </div>

        <div className='flex items-center justify-center gap-5 px-5 lg:hidden '>
          <Link to='/' className=''>
            <AiFillHome size={30} />
          </Link>
          <Link to='/products'>
            <FaStoreAlt size={30} />
          </Link>
          <Link to='/cart'>
            <AiOutlineShoppingCart size={30} />
          </Link>
        </div>
      </div>
      <header
        id='navbar'
        className={` ${
          !open ? 'h-0 -translate-x-[100%] bg-gray-900' : 'h-auto translate-x-[0%] bg-gray-900 py-1'
        } sticky top-0
        z-50
      mx-auto
      h-full w-full max-w-screen-xl    flex-col    gap-5 overflow-hidden bg-gray-900 px-5  shadow-lg transition-all duration-700  ease-linear lg:flex  lg:h-max lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between lg:py-1`}
      >
        <Link to='/' className='hidden rounded-3xl lg:flex'>
          <img
          loading='lazy'
            className='hidden max-h-12 w-full rounded-3xl object-cover  lg:flex lg:max-h-[50px]'
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
            <Link className='hidden lg:flex' to='/favorite'>
              <li onClick={upScroll} className='flex  items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500'>
                <MdOutlineFavoriteBorder className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                favoritos
              </li>
            </Link>
            <Link className='hidden lg:flex' to='/products'>
              <li onClick={upScroll} className='flex  items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500'>
                <FaStoreAlt className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                Tienda
              </li>
            </Link>
            <Link className='hidden lg:flex' to='/account'>
              <li onClick={upScroll} className='flex  items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500'>
                <AiOutlineUser className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                Cuenta
              </li>
            </Link>
            <Link className='hidden lg:flex' to='/cart'>
              <li onClick={upScroll} className='relative flex select-none items-center gap-3  font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500 lg:relative'>
                <AiOutlineShoppingCart className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                <span className=':absolute :top-[-15px] :right-[-7px] text-white '>
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
