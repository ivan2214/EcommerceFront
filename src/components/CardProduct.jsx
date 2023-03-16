import { addCartProductAsync } from "@/redux/slices/cart/thunk";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { formatAsARS } from "@/utils/formatNumber";
import { Link } from "react-router-dom";
import SkeletonImage from "./SkeletonImage";
import { motion } from "framer-motion";
import { getTotals } from "@/redux/slices/cart/cartSlice";
import { clearDetailProductState } from "@/redux/slices/product/productSlice";
import { addFavorite, deleteFavorite, getTotalsFavorites } from "@/redux/slices/products/productsSlice";
import SvgCorazon from "@/Icons/SvgCorazon";

const CardProduct = ({ title, description, price, image, id }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((s) => s.cart);
  const { favorites } = useSelector((s) => s.products);
  const [loading, setLoading] = useState(false);

  const conditionFav = favorites?.findIndex((f) => f._id === id);

  const addCart = () => {
    dispatch(addCartProductAsync(id));
  };

  const clearDetailState = () => {
    dispatch(clearDetailProductState());
  };

  const addFavoriteProduct = (id) => {
    const index = favorites?.findIndex((p) => p?._id == id);

    if (index === -1) return dispatch(addFavorite(id));
    if (index >= 0) return dispatch(deleteFavorite(id));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems?.length]);

  useEffect(() => {
    dispatch(getTotalsFavorites());
  }, [favorites?.length]);

  return (
    <motion.article
      className={`relative h-full rounded-md md:max-h-[700px] md:min-h-[500px] md:w-96 md:max-w-xs ${
        conditionFav !== -1 && "border border-purple-600"
      } `}
    >
      <div className='flex h-full flex-col  items-center  justify-between '>
        {!loading ? (
          <Link to={`/product/${id}`} onClick={clearDetailState} className=' '>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              loading='lazy'
              className='mx-auto h-[150px] max-h-[200px] min-h-[50px]  w-full min-w-[208px] rounded-md object-contain'
              src={image}
              alt={description}
            />
          </Link>
        ) : (
          <SkeletonImage w='384px' />
        )}
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize text-purple-700'>{title}</h3>
            <p className='py-5 text-left text-base font-light'>
              {description?.length > 150 ? description.slice(0, 150) + "..." : description}
            </p>
            <span>{formatAsARS(price)}</span>
            <span className='rounded-full bg-purple-700 px-5 text-white'>En stock.</span>
          </div>
          <Link
            to='/pay'
            className='w-full rounded-full bg-purple-700 py-2 text-center text-xl font-bold text-gray-100 transition-all duration-300 hover:bg-purple-400 hover:text-white '
          >
            Comprar
          </Link>
          <button
            onClick={() => addCart(id)}
            className='w-full rounded-full border border-purple-700 py-2 text-center text-xl font-bold text-purple-700 transition-all duration-300 hover:bg-purple-700/70 hover:text-white '
          >
            Agregar
          </button>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <button
          onClick={() => addFavoriteProduct(id)}
          className={` rounded-full border-purple-700  text-center  font-bold  text-purple-700 transition-all duration-300 hover:rounded-full hover:text-purple-700 `}
        >
          <SvgCorazon className={`${conditionFav !== -1 && "text-purple-500 "} rounded-full `} />
        </button>
      </div>
    </motion.article>
  );
};

export default CardProduct;
