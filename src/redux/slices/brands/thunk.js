import axios from 'axios'
import { getAllBrands } from './brandsSlice'

export const getAllBrandsAsync = () => async (dispatch) => {
  // deploy
  const url = 'https://ecommercestrapi-back-production.up.railway.app/api'
  /* const url = 'http://localhost:1337/api' */
  const res = await axios.get(`${url}/brands?populate=*`)
  const data = res.data.data

  dispatch(getAllBrands(data))
}
