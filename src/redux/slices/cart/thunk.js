import axios from 'axios'
import { addToCart } from './cartSlice'

export const addCartProductAsync = (id) => {
  return async function (dispatch) {
    const url = 'https://ecommercestrapi-back-production.up.railway.app/api'
    /* const url = 'http://localhost:1337/api' */
    const res = await axios.get(`${url}/products/${id}?populate=*`)
    const product = res.data.data

    return dispatch(addToCart(product))
  }
}
