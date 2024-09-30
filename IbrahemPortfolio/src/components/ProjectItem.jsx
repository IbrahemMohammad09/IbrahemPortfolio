import React from 'react'

const ProjectItem = ({title,img,details}) => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>{title}</h1>
      <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group 
      hover:bg-gradient-to-r from-gray-200 to-[#001b5e]
      '>
          <img src={img} alt='' className='rounded-xl group-hover:opacity-10' />
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
              {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>React Js</p>
            <a href='https://sparkengdev.com/' target="_blank" rel="noopener noreferrer">
              <p className='text-center p-2 rounded-lg bg-white text-gray-700 cursor-pointer text-lg'>
                Discover More
              </p>
            </a>

          </div>
          
      </div>
    </div>
  )
}

export default ProjectItem