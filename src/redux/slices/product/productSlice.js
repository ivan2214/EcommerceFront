import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productDetail: {},
}

export const detailSice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetail = action.payload
    },
    clearDetailProductState: (state, action) => {
      state.productDetail = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { getProductDetail, clearDetailProductState } = detailSice.actions // para las action

export default detailSice.reducer //para la store
