import FavoriteCard from '@/components/FavoriteCard'
import React from 'react'
import { useSelector } from 'react-redux'

const Favorite = () => {
  const { favorites } = useSelector((s) => s.products)
  return (
    <section className='m-0 mx-auto min-h-screen w-full max-w-screen-xl overflow-hidden bg-slate-100 p-0 text-gray-900'>
      <div className='flex flex-col flex-wrap gap-5 items-start justify-center'>
        {favorites?.length ? (
          favorites.map((f) => {
            return (
              <FavoriteCard
                key={f.id}
                title={f?.attributes?.title}
                description={f?.attributes?.description}
                price={f?.attributes?.price}
                /* image={`http://localhost:1337${p?.attributes?.images?.data[0]?.attributes?.url} `} */
                image={`https://ecommercestrapi-back-production.up.railway.app${f?.attributes?.images?.data[0]?.attributes?.url} `}
                id={f.id}
              />
            )
          })
        ) : (
          <p>Favoritos Vacios, Porfavor Agrega mas prodductos a tus favoritos</p>
        )}
      </div>
    </section>
  )
}

export default Favorite
