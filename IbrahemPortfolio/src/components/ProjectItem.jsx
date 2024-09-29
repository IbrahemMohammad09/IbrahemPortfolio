import React from 'react'

const ProjectItem = ({title,img,details}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group 
    hover:bg-gradient-to-r from-gray-200 to-[#001b5e]
    '>
        {/* <h1 className='text-4xl font-bold text-center text-[#001b5e]'>{title}</h1>/ */}
        <img src={img} alt='' className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[]'>
          <h3>{title}</h3>
        </div>
        {/* <p>{details}</p> */}
    </div>
  )
}

export default ProjectItem