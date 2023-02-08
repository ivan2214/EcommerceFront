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
import { motion, AnimatePresence } from 'framer-motion'

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

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        staggerDirection: 1,
        delayChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const list2 = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
        staggerDirection: 1,
        delayChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <>
      <div className='flex w-full flex-col justify-center  gap-5 bg-gray-900 lg:hidden'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={list}
          className='sticky top-0  right-0 z-50 flex
        items-center justify-between
      overflow-hidden bg-gray-900 text-white transition-all duration-500 ease-linear'
        >
          <motion.div
            variants={item}
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
          </motion.div>

          <motion.div variants={item}>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={list2}
              className='flex items-center justify-center gap-5 px-5 lg:hidden '
            >
              <motion.li variants={item2}>
                <Link to='/' className=''>
                  <AiFillHome size={30} />
                </Link>
              </motion.li>
              <motion.li variants={item2}>
                <Link to='/products'>
                  <FaStoreAlt size={30} />
                </Link>
              </motion.li>
              <motion.li variants={item2}>
                <Link to='/cart'>
                  <AiOutlineShoppingCart size={30} />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: -300 }}
              transition={{ duration: 1 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className=''
            >
              <motion.form
                variants={item}
                onSubmit={handleSubmit}
                className='flex w-full items-center justify-center gap-5 overflow-hidden bg-gray-900 py-3 lg:mx-auto'
              >
                <input
                  type='search'
                  onChange={({ target }) => handleSearch(target)}
                  className='w-auto rounded-lg border border-gray-400 px-5 py-1 text-gray-900 outline-none transition-all duration-500 lg:w-[50%] '
                  placeholder='Buscar..'
                  name=''
                  id=''
                />
                <AiOutlineSearch className='cursor-pointer text-2xl text-white transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.header
        initial='hidden'
        animate='visible'
        variants={list}
        id='navbar'
        className={`sticky top-0
        z-50
      mx-auto
       w-full max-w-screen-xl    flex-col    gap-5 overflow-hidden bg-gray-900 px-5  shadow-lg  lg:flex  lg:h-max lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between lg:py-1`}
      >
        <motion.div variants={item}>
          <Link to='/' className='hidden rounded-3xl lg:flex'>
            <img
              loading='lazy'
              className='hidden max-h-12 w-full rounded-3xl object-cover  lg:flex lg:max-h-[70px]'
              src={img}
              alt=''
            />
          </Link>
        </motion.div>

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className='hidden w-full items-center justify-center gap-5 lg:mx-auto lg:flex'
        >
          <input
            type='search'
            onChange={({ target }) => handleSearch(target)}
            className='w-[50%] rounded-lg border border-gray-400 px-5 py-1 text-gray-900 outline-none transition-all duration-500 '
            placeholder='Buscar..'
            name=''
            id=''
          />
          <AiOutlineSearch className='cursor-pointer text-2xl text-white transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
        </motion.form>

        <motion.nav variants={item} className=''>
          <ul className='flex flex-col items-center justify-between gap-12    lg:flex-row lg:items-center lg:justify-center lg:gap-5 lg:p-3'>
            <li
              onClick={upScroll}
              className='hidden items-center  gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500 lg:flex'
            >
              <Link className='flex items-center justify-center gap-2' to='/favorite'>
                <MdOutlineFavoriteBorder className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                favoritos
              </Link>
            </li>
            <li
              onClick={upScroll}
              className='hidden items-center  gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500 lg:flex'
            >
              <Link className='flex items-center justify-center gap-2' to='/products'>
                <FaStoreAlt className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                Tienda
              </Link>
            </li>
            <li
              onClick={upScroll}
              className=' hidden items-center gap-3 font-sans text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500 lg:flex'
            >
              <Link className='flex items-center justify-center gap-2' to='/account'>
                <AiOutlineUser className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                Cuenta
              </Link>
            </li>
            <li
              onClick={upScroll}
              className='relative hidden select-none items-center gap-3 font-sans  text-lg font-semibold text-white transition-all duration-500 hover:text-gray-500 lg:relative lg:flex'
            >
              <Link className='flex items-center justify-center gap-2' to='/cart'>
                <AiOutlineShoppingCart className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
                <span className=':absolute :top-[-15px] :right-[-7px] text-white '>
                  {cartTotalQuantity}
                </span>
              </Link>
            </li>
          </ul>
        </motion.nav>
      </motion.header>
    </>
  )
}

export default NavBar
