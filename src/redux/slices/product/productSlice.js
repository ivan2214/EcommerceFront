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
  },
})

// Action creators are generated for each case reducer function
export const { getProductDetail } = detailSice.actions // para las action

export default detailSice.reducer //para la store
