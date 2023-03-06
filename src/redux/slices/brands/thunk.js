import axios from 'axios'
import { getAllBrands } from './brandsSlice'
import brandsDb from './brandsDb.json'

export const getAllBrandsAsync = () => async (dispatch) => {
  try {
    const data = brandsDb
    dispatch(getAllBrands(data))
  } catch (error) {
    console.log(error)
  }
}
