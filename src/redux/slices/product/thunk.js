import axios from 'axios'
import { loadingState } from '../products/productsSlice'
import { getProductDetail } from './productSlice'

export const getAsyncProductDetail = (id) => {
  return async function (dispatch) {
    // deploy
    const url = 'https://ecommercestrapi-back-production.up.railway.app/api'
    /* const url = 'http://localhost:1337/api' */
    const res = await axios.get(`${url}/products/${id}?populate=*`)
    const data = res.data.data
    console.log(data)
    dispatch(loadingState(true))

    dispatch(getProductDetail(data))

    dispatch(loadingState(false))
  }
}
