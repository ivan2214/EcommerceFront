import axios from "axios";
import { getAllBrands } from "./brandsSlice";

export const getAllBrandsAsync = () => async (dispatch) => {
  // deploy
  const url = "http://localhost:3001/api";
  const res = await axios.get(`${url}/brands`);
  const data = res.data;

  dispatch(getAllBrands(data));
};
