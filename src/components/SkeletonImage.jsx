import React from 'react'

const SkeletonImage = ({ maxW, minW, w }) => {
  return (
    <div
      className={`mx-auto w-[${
        w ? w : 'h-28 w-28'
      }]   animate-pulse overflow-hidden rounded-3xl bg-slate-700/50   p-6 shadow transition-all md:max-w-xs`}
    ></div>
  )
}

export default SkeletonImage
