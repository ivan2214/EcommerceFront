import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import { motion } from "framer-motion";
import Skeleton from "./Skeleton";

const AllProducts = () => {
  const { products } = useSelector((s) => s.products);
  const { loading } = useSelector((s) => s.products);

  return (
    <section className='md:mx-auto  md:min-h-screen md:max-w-screen-xl  md:py-5'>
      <motion.section className='grid h-full w-full  grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-x-4 gap-y-16 overflow-hidden bg-gray-100  px-5 shadow-sm  md:grid-cols-3'>
        {products?.length && !loading ? (
          <>
            {products?.map((p) => {
              return (
                <CardProduct
                  key={p?._id}
                  title={p?.title}
                  description={p?.description}
                  price={p?.price}
                  image={p?.image}
                  id={p._id}
                />
              );
            })}
          </>
        ) : (
          <>
            {!products?.length ? (
              <div>
                <p>Lo sentimos no contamos con esos productos</p>
              </div>
            ) : (
              <>
                {products?.map((p) => (
                  <Skeleton key={p?._id} />
                ))}
              </>
            )}
          </>
        )}
      </motion.section>
    </section>
  );
};

export default AllProducts;
