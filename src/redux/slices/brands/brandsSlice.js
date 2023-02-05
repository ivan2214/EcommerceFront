import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  brands: [],
}

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    getAllBrands: (state, action) => {
      state.brands = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getAllBrands } = brandsSlice.actions // para las action

export default brandsSlice.reducer //para la store
