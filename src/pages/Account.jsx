import React from 'react'

const Account = () => {
  return (
    <section className='m-0 mx-auto min-h-screen w-full max-w-screen-xl overflow-hidden bg-slate-100 p-0 text-gray-900'>
      <div className='flex w-full  flex-col flex-wrap items-start justify-center gap-5 lg:p-10'>
        <h4 className='font-light '>Mi cuenta / Account</h4>
        {/* Datos de la cuenta */}
        <section className='flex  w-full min-w-full max-w-xs flex-col items-start justify-center gap-5 bg-white p-10 shadow-xl'>
          <h2 className='text-xl font-bold uppercase'>Datos de la cuenta</h2>
          <div className='flex w-full flex-col items-start justify-center gap-5'>
            {/* correeo */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Usuario</h3>
              <p className='text-base font-normal text-purple-500'>example@gmail.com</p>
            </div>
            {/* contraseñ */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Contraseña</h3>
              <p className='text-base font-normal text-purple-500'>************</p>
            </div>
          </div>
        </section>
        {/* Datos Personales */}
        <section className='flex  w-full min-w-full max-w-xs flex-col items-start justify-center gap-5 bg-white p-10 shadow-xl'>
          <h2 className='text-xl font-bold uppercase'>Datos personales</h2>
          <div className='flex w-full flex-col items-start justify-center gap-5'>
            {/* Nombre */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Nombre</h3>
              <p className='text-base font-normal text-purple-500'>Ivan Agustin</p>
            </div>
            {/* Apellido */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Apellido</h3>
              <p className='text-base font-normal text-purple-500'>Bongiovanni</p>
            </div>
            {/* documento */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Documento</h3>
              <p className='text-base font-normal text-purple-500'>123456789</p>
            </div>
            {/* Teléfono */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Teléfono</h3>
              <p className='text-base font-normal text-purple-500'>3812465785</p>
            </div>
          </div>
        </section>
        {/* Datos de envío */}
        <section className='flex  w-full min-w-full max-w-xs flex-col items-start justify-center gap-5 bg-white p-10 shadow-xl'>
          <h2 className='text-xl font-bold uppercase'>Datos de envío</h2>
          <div className='flex w-full flex-col items-start justify-center gap-5'>
            {/* Calle */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Calle</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
            {/* Numero */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Número</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
            {/* Piso */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Piso</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
            {/* Depto */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Dpto</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
            {/* Codigo Postal */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Codigo Postal</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
            {/* Provincia */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Provincia</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
            {/* Ciudad */}
            <div className='flex w-full items-center justify-between gap-5'>
              <h3 className='text-base font-normal text-purple-500'>Ciudad</h3>
              <p className='text-base font-normal text-purple-500'>bla bla bla</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Account
