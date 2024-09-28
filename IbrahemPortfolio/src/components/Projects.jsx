import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore nihil nesciunt accusantium exercitationem itaque obcaecati nam commodi eum autem omnis, 
            placeat cupiditate? Autem consequatur iusto nemo itaque fugiat repellat deleniti.
        </p>
        <div>
            <ProjectItem />
        </div>
    </div>
  )
}

export default Projects