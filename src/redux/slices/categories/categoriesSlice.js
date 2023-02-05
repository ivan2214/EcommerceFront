import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getAllCategories } = categoriesSlice.actions // para las action

export default categoriesSlice.reducer //para la store
