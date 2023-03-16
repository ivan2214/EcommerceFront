import React from 'react'
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='flex  h-full w-full flex-row items-center justify-center gap-10  bg-gray-900 py-5 text-white '>
      <section>
        <div className='flex flex-col items-center gap-5'>
          <h4>Ayuda</h4>
          <p>Si tenés sugerencias o comentarios</p>
          <button className='rounded-lg border bg-purple-700 p-1 text-xs text-white transition-all  duration-300 hover:bg-purple-400'>
            CONTACTANOS
          </button>
        </div>
      </section>
      <section className='h-full border-r'>
        <div className='flex flex-col items-center gap-5'>
          <button className='rounded-lg border bg-purple-700 p-1 text-xs text-white transition-all  duration-300 hover:bg-purple-400'>
            ¡Trabajá con nosotros!
          </button>
          <button
            className='border-b text-xs
'
          >
            Botón de arrepentimiento
          </button>
        </div>
      </section>
      <section>
        <div className='flex flex-col items-start justify-center gap-5'>
          <h4>Seguinos en</h4>
          <div className='flex items-center justify-start gap-3'>
            <button className='flex items-center justify-center rounded-full bg-white p-1  text-black'>
              <AiFillTwitterCircle />
            </button>
            <button className='flex items-center justify-center rounded-full bg-white p-1  text-black'>
              <AiFillInstagram />
            </button>
            <button className='flex items-center justify-center rounded-full bg-white p-1  text-black'>
              <AiFillYoutube />
            </button>
            <button className='flex items-center justify-center rounded-full bg-white p-1  text-black'>
              <AiFillFacebook />
            </button>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
