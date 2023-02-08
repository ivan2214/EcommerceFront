import { orderProducts } from '@/redux/slices/products/productsSlice'
import { getAllProductsAsync, filterAsync } from '@/redux/slices/products/thunk'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Filters.css'
import { toast } from 'react-hot-toast'
import { SortArray } from '@/utils/sortedArray'

const Filters = () => {
  const { name, cat } = useParams()
  const { categories } = useSelector((s) => s.categories)
  const { brands } = useSelector((s) => s.brands)
  let catAlfa = [...categories].sort(SortArray)
  let brandAlfa = [...brands].sort(SortArray)
  const [order, setOrder] = useState('')
  const [openFiltersCategory, setOpenFiltersCategory] = useState('')
  const [openFiltersOrder, setOpenFiltersOrder] = useState(false)
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
  })
  const dispatch = useDispatch()
  const filterRef = useRef()

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
    if (filters.brand.length > 0 || filters.category.length > 0) {
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
        style: {},
        className: '',
        style: {
          background: '#333',
          color: '#fff',
        },
      },
    )
  }

  const condition = filters.brand.length > 0 || filters.category.length > 0 || order !== ''

  return (
    <>
      <div className='flex flex-col items-center gap-5 py-5 px-5 lg:hidden'>
        <button
          className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-green-400 shadow-sm  md:max-w-[250px]'
          onClick={() => setOpenFiltersOrder(!openFiltersOrder)}
        >
          Orden
        </button>

        <button
          className='w-full max-w-[150px] rounded-full border-2 bg-white py-1 px-6 font-normal text-green-400 shadow-sm  md:max-w-[250px]'
          onClick={() => setOpenFiltersCategory(!openFiltersCategory)}
        >
          Categorias
        </button>
      </div>

      {/* filters mobile */}

      {openFiltersCategory ? (
        <section className=' my-5 w-full border border-white px-5  py-10 shadow-sm'>
          {categories.map((c) => {
            return (
              <div key={c.id} className='flex items-center gap-5'>
                <input
                  onChange={(e) => handleChange(e)}
                  type='checkbox'
                  className='text-gray-800'
                  value={c?.attributes?.name}
                  id={c?.attributes?.name}
                  name='category'
                  checked={filters?.category.includes(c?.attributes?.name)}
                />
                <label htmlFor={c?.attributes?.name}>{c?.attributes?.name}</label>
              </div>
            )
          })}
        </section>
      ) : (
        <></>
      )}

      {openFiltersOrder ? (
        <section className=' my-5 w-full border border-white px-5 py-5 shadow-sm'>
          <select
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
          </select>
        </section>
      ) : (
        <></>
      )}

      <section className='hidden sticky  left-0 flex-col gap-5 overflow-hidden p-5  md:w-full md:flex-row md:justify-between lg:flex lg:min-h-screen   lg:max-w-[150px] lg:flex-col lg:justify-start lg:gap-16 lg:py-10'>
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
          <select
            value={order || 'order'}
            onChange={({ target }) => handleChangeOrder(target)}
            className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
            id=''
          >
            <option value='order'>Orden</option>
            <option value='asc'>mayor+</option>
            <option value='desc'>menor-</option>
          </select>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl font-bold text-purple-700'>Marca:</h2>

          {brandAlfa?.map((b) => {
            return (
              <div key={b.id} className='flex items-center gap-5'>
                <input
                  onChange={(e) => handleChange(e)}
                  type='checkbox'
                  className='text-gray-800'
                  value={b?.attributes?.name}
                  id={b?.attributes?.name}
                  name='brand'
                  checked={filters?.brand.includes(b?.attributes?.name)}
                />
                <label htmlFor={b?.attributes?.name}>{b?.attributes?.name}</label>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl font-bold text-purple-700'>Categoria:</h2>
          {/* <select
          value={filters.category || 'category'}
          className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
          name='category'
          id=''
        ></select> */}
          {catAlfa?.map((c) => {
            return (
              <div key={c.id} className='flex items-center gap-5'>
                <input
                  onChange={(e) => handleChange(e)}
                  type='checkbox'
                  className='text-gray-800'
                  value={c?.attributes?.name}
                  id={c?.attributes?.name}
                  name='category'
                  checked={filters?.category.includes(c?.attributes?.name)}
                />
                <label htmlFor={c?.attributes?.name}>{c?.attributes?.name}</label>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Filters
