import axios from "axios";
import { getAllProducts, filterProducts, searchProduct, loadingState } from "./productsSlice";

export const getAllProductsAsync = () => async (dispatch) => {
  /* const url = 'p.image/api' */
  const url = "http://localhost:3001/api";
  const res = await axios.get(`${url}/products`);
  const data = res.data;
  dispatch(loadingState(true));
  dispatch(getAllProducts(data));
  dispatch(loadingState(false));
};

export const filterAsync = (filters) => {
  return async function (dispatch) {
    const baseUrl = "http://localhost:3001/api";
    let url = `${baseUrl}/products/filters`;

    // Agrega los filtros que correspondan
    if (filters.category && Array.isArray(filters.category) && filters.category.length > 0) {
      const categoryFilter = filters.category.join(",");
      url += `?category=${categoryFilter}`;
    }
    if (filters.brand && Array.isArray(filters.brand) && filters.brand.length > 0) {
      const brandFilter = filters.brand.join(",");
      url += `${
        filters.category && Array.isArray(filters.category) && filters.category.length > 0
          ? "&"
          : "?"
      }brand=${brandFilter}`;
    }

    // Realiza la solicitud utilizando los filtros
    const res = await axios.get(url);
    const data = res.data;
    dispatch(loadingState(true));
    dispatch(filterProducts(data));
    return dispatch(loadingState(false));
  };
};

export const searchProductAsync = (query) => {
  return async function (dispatch) {
    /* const url = 'p.image/api' */
    const url = "http://localhost:3001/api";
    const res = await axios.get(`${url}/products?filters[title][$contains]=${query}&populate=*`);
    const data = res.data.data;
    dispatch(loadingState(true));
    dispatch(searchProduct(data));
    dispatch(loadingState(false));
  };
};
