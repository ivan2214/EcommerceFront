import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "@/redux/slices/products/thunk";
import { useEffect } from "react";
import { getAllCategoriesAsync } from "@/redux/slices/categories/thunk";
import { getAllBrandsAsync } from "@/redux/slices/brands/thunk";
import { loadingState } from "@/redux/slices/products/productsSlice";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const LayoutPublic = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(loadingState(true));
    dispatch(getAllProductsAsync());
    dispatch(getAllCategoriesAsync());
    dispatch(getAllBrandsAsync());
    dispatch(loadingState(false));
  }, []);

  if (loading)
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Loading />
      </div>
    );

  return (
    <div className='scroll-smooth transition-all duration-300 '>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};
export default LayoutPublic;
