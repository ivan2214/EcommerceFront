import { addToCart } from './cartSlice'
import productsDb from '../products/productsDb.json'

export const addCartProductAsync = (id) => {
  return async function (dispatch) {
    const product = productsDb.find((product) => product._id === id)

    return dispatch(addToCart(product))
  }
}
