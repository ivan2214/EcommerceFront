import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: true,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload
    },
    filterProducts: (state, action) => {
      state.products = action.payload
    },
    orderProducts: (state, action) => {
      let productsState = [...state.products]
      let filter = action.payload
      if (filter === 'orden') return state.pr
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
  },
})

// Action creators are generated for each case reducer function
export const { getAllProducts, loadingState, filterProducts, searchProduct, orderProducts } =
  productsSlice.actions // para las action

export default productsSlice.reducer //para la store
