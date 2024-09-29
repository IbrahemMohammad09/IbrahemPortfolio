import React from 'react'
import ProjectItem from './ProjectItem'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'


const data2 = [
    {
      title:"313",
      img:img1,
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil nesciunt accusantium exercitationem itaque obcaecati nam commodi eum autem omnis, placeat cupiditate? Autem consequatur iusto nemo itaque fugiat repellat deleniti."
    },
    {
      title:"313",
      img:img2,
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil nesciunt accusantium exercitationem itaque obcaecati nam commodi eum autem omnis, placeat cupiditate? Autem consequatur iusto nemo itaque fugiat repellat deleniti."
    },
    {
      title:"313",
      img:img3,
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil nesciunt accusantium exercitationem itaque obcaecati nam commodi eum autem omnis, placeat cupiditate? Autem consequatur iusto nemo itaque fugiat repellat deleniti."
    },
  ]

const Projects = () => {

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore nihil nesciunt accusantium exercitationem itaque obcaecati nam commodi eum autem omnis, 
            placeat cupiditate? Autem consequatur iusto nemo itaque fugiat repellat deleniti.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>

        {data2.map((item, idx) => (
            <ProjectItem key={idx} title={item.title} img={item.img} details={item.details} />
          ))}

            


        </div>
    </div>
  )
}

export default Projects