import axios from 'axios'
import { getAllProducts, filterProducts, searchProduct, loadingState } from './productsSlice'
import productsDb from './productsDb.json'

export const getAllProductsAsync = () => async (dispatch) => {
  const url = 'http://localhost:3001/api'
  try {
    const res = await axios.get(`${url}/products`)
    const data = res.data
    dispatch(loadingState(true))
    dispatch(getAllProducts(data))
    dispatch(loadingState(false))
  } catch (error) {
    console.log(error)
    const data = productsDb
    dispatch(loadingState(true))
    dispatch(getAllProducts(data))
    dispatch(loadingState(false))
  }
}

export const filterAsync = (filters) => {
  return async function (dispatch) {
    try {
      let filteredProducts = [...productsDb]

      // Agrega los filtros que correspondan
      if (filters.category && Array.isArray(filters.category) && filters.category.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.category.includes(product.category),
        )
      }
      if (filters.brand && Array.isArray(filters.brand) && filters.brand.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.brand.includes(product.brand),
        )
      }
      console.log(filterProducts)

      dispatch(filterProducts(filteredProducts))

      return filteredProducts // retorna los productos filtrados
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export const searchProductAsync = (query) => {
  return async function (dispatch) {
    /* const url = 'p.image/api' */

    try {
      dispatch(searchProduct(query))
    } catch (error) {
      console.error(error)
    }
  }
}
