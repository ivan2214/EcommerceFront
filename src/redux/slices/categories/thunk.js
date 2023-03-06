import axios from 'axios'
import { getAllCategories } from './categoriesSlice'
import categoriesDb from './categoriesDb.json'

export const getAllCategoriesAsync = () => async (dispatch) => {
  const url = 'http://localhost:3001/api'
  try {
    const res = await axios.get(`${url}/products`)
    const data = res.data

    dispatch(getAllCategories(data))
  } catch (error) {
    console.log(error)
    const data = categoriesDb

    dispatch(getAllCategories(data))
  }
}
