import React from 'react'

const Skeleton = () => {
  return (
    <div class='border  lg:max-w-xs   lg:w-52  overflow-hidden p-5 shadow rounded-md w-full mx-auto'>
      <div class='animate-pulse w-full flex flex-col items-center gap-10 h-full space-x-4'>
        <div class='rounded-full bg-slate-700 h-10 w-10'></div>
        <div class='w-full space-y-6 py-1'>
          <div class='h-2 bg-slate-700 rounded'></div>
          <div class='space-y-3'>
            <div class='grid grid-cols-3 overflow-hidden gap-4'>
              <div class='h-2 bg-slate-700 rounded col-span-2'></div>
              <div class='h-2 bg-slate-700 rounded col-span-1'></div>
            </div>
            <div class='h-2 bg-slate-700 rounded'></div>
            <div class='h-2 bg-slate-700 rounded'></div>
            <div class='h-2 bg-slate-700 rounded'></div>
            <div class='h-2 bg-slate-700 rounded'></div>
            <div class='h-2 bg-slate-700 rounded'></div>
            <div class='h-2 bg-slate-700 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
