import { formatAsARS } from "@/utils/formatNumber";
import React from "react";
import Loading from "./Loading";
import SkeletonImage from "./SkeletonImage";

const CartDetails = ({ id, title, description, price, quantity, image, categories, loading }) => {
  console.log(image);
  return (
    <>
      {!loading || !image || !title || !description || !image.data.length || isNaN(price) ? (
        <div className=' mx-auto flex h-full  w-full max-w-6xl flex-col justify-center gap-10 md:flex-row  '>
          <div className='flex h-full items-center justify-start gap-5  px-8 md:flex-col md:items-start  md:justify-between'>
            <div
              key={id}
              className='flex h-24 w-24 items-center justify-center rounded-md bg-gray-400/60 p-5'
            >
              <img
                loading='lazy'
                className=' mx-auto w-full  rounded-md object-contain'
                src={image}
                alt=''
              />
            </div>
          </div>
          <section className='flex h-full min-h-[200px] w-full max-w-3xl rounded-md  '>
            {image ? (
              <img
                className='  h-full  min-h-[100px] w-full rounded-md object-cover'
                src={image}
                alt={description}
              />
            ) : (
              <SkeletonImage w='384px' />
            )}
          </section>
          <section className=' w-full max-w-3xl'>
            <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
              <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
                <h3 className='text-lg font-bold capitalize text-purple-500'>{title && title}</h3>
                <p className='py-5 text-left text-base font-light'>{description}</p>
                <span>{formatAsARS(price)}</span>
                <span className='rounded-full bg-purple-500 px-5 text-white'>
                  {quantity > 0 && "En stock."}
                </span>
              </div>

              <button
                onClick={() => addCart(product, id)}
                className='w-full rounded-full border border-purple-500 py-2 text-center text-xl font-bold text-purple-500'
              >
                Agregar
              </button>
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CartDetails;
