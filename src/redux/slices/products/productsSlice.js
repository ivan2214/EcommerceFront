import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState = {
  products: [],
  loading: true,
  favorites: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload
    },
    filterProducts: (state, action) => {
      if (typeof action.payload !== 'string') state.products = action.payload
    },
    orderProducts: (state, action) => {
      let productsState = [...state.products]
      let filter = action.payload
      if (filter === 'orden') return state.products
      let filters = productsState.sort((a, b) => {
        if (filter === 'asc') {
          return b?.attributes?.price - a?.attributes?.price
        } else if (filter === 'desc') {
          return a?.attributes?.price - b?.attributes?.price
        }
      })
      console.log(filters)
      state.products = filters
    },
    searchProduct: (state, action) => {
      state.products = action.payload
    },
    loadingState: (state, action) => {
      state.loading = action.payload
    },
    addFavorite: (state, action) => {
      const products = [...state?.products]
      const favorites = [...state?.favorites]
      const findProduct = products.find((p) => p?.id === action?.payload)
      const index = favorites?.findIndex((p) => p?.id === findProduct?.id)

      if (index !== -1) {
        toast('Producto Ya esta en favoritos!', {
          duration: 2000,
          position: 'bottom-left',
          reverseOrder: true,

          // Styling
          icon: '⚠',

          style: {
            background: '#333',
            color: '#fff',
          },

          // Custom Icon

          // Change colors of success/error/loading icon
        })
      } else {
        state.favorites = [...state?.favorites, findProduct]
        toast.success('Producto agregado a favoritos!', {
          duration: 2000,
          position: 'bottom-left',
          reverseOrder: true,

          // Styling
          style: {},
          className: '',
          style: {
            background: '#333',
            color: '#fff',
          },

          // Custom Icon

          // Change colors of success/error/loading icon
        })
      }
    },
    deleteFavorite: (state, action) => {
      const products = [...state?.products]
      const favorites = [...state?.favorites]
      const findProduct = products.find((p) => p?.id === action?.payload)
      const filter = favorites?.filter((p) => p?.id !== findProduct?.id)

      state.favorites = filter
      toast.error('Producto eliminado de favoritos!', {
        duration: 2000,
        position: 'bottom-left',
        reverseOrder: true,

        // Styling
        style: {},
        className: '',
        style: {
          background: '#111827',
          color: '#ffffff',
        },

        // Custom Icon

        // Change colors of success/error/loading icon
      })
    },
    clearFavorite: (state, action) => {
      state.favorites = []
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  getAllProducts,
  addFavorite,
  loadingState,
  filterProducts,
  searchProduct,
  orderProducts,
  clearFavorite,
  deleteFavorite,
} = productsSlice.actions // para las action

export default productsSlice.reducer //para la store
