import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ButtonLoading = () => {
  return (
    <button type='button' className='rounded-md  bg-green-400 px-8 py-2 text-white transition-all duration-300 ease-linear hover:bg-green-700 text-center flex items-center justify-center' disabled>
      <AiOutlineLoading3Quarters className='animate-spin h-5 w-5 mr-3 ' />
      Processing...
    </button>
  )
}

export default ButtonLoading
