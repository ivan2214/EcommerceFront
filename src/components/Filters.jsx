import { orderProducts } from '@/redux/slices/products/productsSlice'
import { getAllProductsAsync, filterAsync } from '@/redux/slices/products/thunk'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Filters.css'
import { toast } from 'react-hot-toast'
import { SortArray } from '@/utils/sortedArray'
import { motion, AnimatePresence } from 'framer-motion'

const Filters = () => {
  const { name, cat } = useParams()
  const { categories } = useSelector((s) => s.categories)
  const { brands } = useSelector((s) => s.brands)
  let catAlfa = [...categories].sort(SortArray)
  let brandAlfa = [...brands].sort(SortArray)
  const [order, setOrder] = useState('')
  const [openFiltersCategory, setOpenFiltersCategory] = useState('')
  const [openFiltersOrder, setOpenFiltersOrder] = useState(false)
  const [openFiltersBrand, setOpenFiltersBrand] = useState(false)
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (name && !filters.brand.includes(name))
      setFilters({
        ...filters,
        brand: [...filters.brand, name],
      })
  }, [name])

  useEffect(() => {
    if (cat && !filters.category.includes(cat))
      setFilters({
        ...filters,
        category: [...filters.category, cat],
      })
  }, [cat])

  const handleChange = (e) => {
    if (e?.target?.name === 'order') setOrder(e.target?.value)
    if (e?.target?.checked) {
      setFilters({
        ...filters,
        [e.target.name]:
          e.target.name == 'category'
            ? [...filters.category, e.target?.value]
            : [...filters.brand, e.target?.value],
      })
    } else {
      setFilters({
        brand: filters.brand.filter((b) => b !== e.target.value),
        category: filters.category.filter((c) => c !== e.target.value),
      })
      dispatch(getAllProductsAsync())
    }
  }

  const handleChangeOrder = (e) => {
    setOrder(e.value)
  }

  const clearFilters = () => {
    dispatch(getAllProductsAsync())
    setFilters({
      brand: [],
      category: [],
    })
    setOrder('')
  }

  useEffect(() => {
    if (filters.brand?.length > 0 || filters?.category?.length > 0) {
      filter()
    }
  }, [filters])

  useEffect(() => {
    if (order === 'asc' || order == 'desc') {
      dispatch(orderProducts(order))
    }
  }, [order])

  useEffect(() => {
    if (order === 'order') dispatch(getAllProductsAsync())
    if (order === 'order') {
      setFilters({ brand: [], category: [] })
      setOrder('')
    }
  }, [order, filters])

  const filter = () => {
    dispatch(filterAsync(filters))
    toast.promise(
      dispatch(filterAsync(filters)),
      {
        loading: 'Cargando productos filtrados...',
        success: 'Filtrados!',
        error: 'Ups algo salio mal.',
      },
      {
        duration: 2000,

        reverseOrder: true,

        // Styling

        className: '',
        style: {
          background: '##111827',
          color: '#ffffff',
        },
      },
    )
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

  const condition = filters?.brand?.length > 0 || filters?.category?.length > 0 || order !== ''

  return (
    <>
      <div className='flex flex-col items-center gap-5 py-5 px-5 md:hidden'>
        <button
          className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-purple-700 shadow-sm  md:max-w-[250px]'
          onClick={() => setOpenFiltersCategory(!openFiltersCategory)}
        >
          Categorias
        </button>
        <div className=' flex items-center justify-between gap-5'>
          <button
            className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-purple-700 shadow-sm  md:max-w-[250px]'
            onClick={() => setOpenFiltersOrder(!openFiltersOrder)}
          >
            Orden
          </button>

          <button
            className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-purple-700 shadow-sm  md:max-w-[250px]'
            onClick={() => setOpenFiltersBrand(!openFiltersBrand)}
          >
            Marcas
          </button>
        </div>
      </div>

      {/* filters mobile */}

      {condition ? (
        <button
          className={`animationButton rounded-full border border-sky-400  py-1 px-4 text-gray-500 transition-all duration-500 lg:hidden 

             `}
          onClick={clearFilters}
        >
          Borrar Filtros
        </button>
      ) : (
        <></>
      )}

      {/* categoria */}
      <AnimatePresence>
        {openFiltersCategory && (
          <motion.div
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
          >
            <motion.section
              initial='hidden'
              animate='visible'
              variants={list}
              className=' my-5 w-full border border-white px-5  py-10 shadow-sm'
            >
              {catAlfa.map((c) => {
                console.log(catAlfa)
                return (
                  <motion.div variants={item} key={c._id} className='flex items-center gap-5'>
                    <input
                      onChange={(e) => handleChange(e)}
                      type='checkbox'
                      className='text-gray-800'
                      value={c?.name}
                      id={c?.name}
                      name='category'
                      checked={filters?.category.includes(c?.name)}
                    />
                    <label htmlFor={c?.name}>{c?.name}</label>
                  </motion.div>
                )
              })}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
      {/*  mnarca */}
      <AnimatePresence>
        {openFiltersBrand && (
          <motion.div
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
          >
            <motion.section
              initial='hidden'
              animate='visible'
              variants={list}
              className=' my-5 w-full border border-white px-5  py-10 shadow-sm'
            >
              {brandAlfa.map((c) => {
                return (
                  <motion.div variants={item} key={c._id} className='flex items-center gap-5'>
                    <input
                      onChange={(e) => handleChange(e)}
                      type='checkbox'
                      className='text-gray-800'
                      value={c?.name}
                      id={c?.name}
                      name='category'
                      checked={filters?.brand.includes(c?.name)}
                    />
                    <label htmlFor={c?.name}>{c?.name}</label>
                  </motion.div>
                )
              })}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
      {/* orden */}
      <AnimatePresence>
        {openFiltersOrder && (
          <motion.section
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            className=' my-5 w-full border border-white px-5 py-5 shadow-sm'
          >
            <motion.select
              value={order || 'order'}
              onChange={({ target }) => handleChangeOrder(target)}
              className='max-w-[150px]  select-none appearance-none rounded-md bg-purple-700 py-1 px-3 text-white'
              id=''
            >
              <option className='bg-purple-700 text-white' value='order'>
                Orden
              </option>
              <option className='bg-purple-700 text-white' value='asc'>
                mayor+
              </option>
              <option className='bg-purple-700 text-white' value='desc'>
                menor-
              </option>
            </motion.select>
          </motion.section>
        )}
      </AnimatePresence>

      {/* pc */}

      <section className='sticky left-0  hidden flex-col gap-5 overflow-hidden p-5  md:flex md:min-h-screen md:w-full md:max-w-[150px]   md:flex-col md:justify-start  md:gap-16 md:py-10'>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl font-bold text-purple-700'>Ordenar por:</h2>
          {condition ? (
            <button
              className={`animationButton rounded-full border  border-sky-400 py-1 px-4 text-gray-500 transition-all duration-500 

             `}
              onClick={clearFilters}
            >
              Borrar Filtros
            </button>
          ) : (
            <></>
          )}
          <motion.select
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
            value={order || 'order'}
            onChange={({ target }) => handleChangeOrder(target)}
            className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
            id=''
          >
            <option value='order'>Orden</option>
            <option value='asc'>mayor+</option>
            <option value='desc'>menor-</option>
          </motion.select>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl font-bold text-purple-700'>Marca:</h2>
          <motion.div initial='hidden' animate='visible' variants={list}>
            {brandAlfa?.map((b) => {
              return (
                <motion.div variants={item} key={b._id} className='flex items-center gap-5'>
                  <input
                    onChange={(e) => handleChange(e)}
                    type='checkbox'
                    className='text-gray-800'
                    value={b?.name}
                    id={b?.name}
                    name='brand'
                    checked={filters?.brand.includes(b?.name)}
                  />
                  <label htmlFor={b?.name}>{b?.name}</label>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl font-bold text-purple-700'>Categoria:</h2>
          <motion.div initial='hidden' animate='visible' variants={list}>
            {catAlfa?.map((c) => {
              return (
                <motion.div variants={item} key={c._id} className='flex items-center gap-5'>
                  <input
                    onChange={(e) => handleChange(e)}
                    type='checkbox'
                    className='text-gray-800'
                    value={c?.name}
                    id={c?.name}
                    name='category'
                    checked={filters?.category.includes(c?.name)}
                  />
                  <label htmlFor={c?.name}>{c?.name}</label>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Filters
