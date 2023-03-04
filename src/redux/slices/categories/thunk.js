import axios from "axios";
import { getAllCategories } from "./categoriesSlice";

export const getAllCategoriesAsync = () => async (dispatch) => {
  // deploy
  const url = "http://localhost:3001/api";
  /* const url = 'http://localhost:1337/api' */
  const res = await axios.get(`${url}/categories`);
  const data = res.data;

  dispatch(getAllCategories(data));
};
