import FavoriteCard from "@/components/FavoriteCard";
import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { favorites } = useSelector((s) => s.products);
  return (
    <section className='m-0 mx-auto min-h-screen w-full max-w-screen-xl overflow-hidden bg-slate-100 p-0 text-gray-900'>
      <div className='flex flex-col flex-wrap items-start justify-center gap-5'>
        {favorites?.length ? (
          favorites.map((f) => {
            return (
              <FavoriteCard
                key={f._id}
                title={f?.title}
                description={f?.description}
                price={f?.price}
                image={f?.image}
                id={f?._id}
              />
            );
          })
        ) : (
          <p>Favoritos Vacios, Porfavor Agrega mas prodductos a tus favoritos</p>
        )}
      </div>
    </section>
  );
};

export default Favorite;
