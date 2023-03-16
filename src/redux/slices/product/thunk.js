import { loadingState } from '../products/productsSlice'
import { getProductDetail } from './productSlice'
import productsData from '../products/productsDb.json'

export const getAsyncProductDetail = (id) => {
  return function (dispatch) {
    const data = productsData.find((product) => product?._id === id)
    console.log(data)
    dispatch(loadingState(true))

    dispatch(getProductDetail(data))

    dispatch(loadingState(false))
  }
}
