import axios from "axios";
import { addToCart } from "./cartSlice";

export const addCartProductAsync = (id) => {
  return async function (dispatch) {
    const url = "http://localhost:3001/api";
    /* const url = 'http://localhost:1337/api' */
    const res = await axios.get(`${url}/products/${id}`);
    const product = res.data;

    return dispatch(addToCart(product));
  };
};
