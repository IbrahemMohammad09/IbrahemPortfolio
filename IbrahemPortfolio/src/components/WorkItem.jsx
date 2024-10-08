import React from 'react'

const WorkItem = ({year,title,duration,details,url}) => {
  return (
    <ol className='flex flex-col m:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-blue-200 rounded-full mt-1.3 -left-1.5 border-white'/>
        <p className='flex flex-warp gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibild text-white bg-[#001b5e] rounded-md'>{year}</span>
          <span className='text-lg font-semibild text-[#001b5e]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
        </p>
        <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
        <p className='my-2 text-base font-normal text-stone-500'>{url}</p>
      </li>
    </ol>
  )
}

export default WorkItem