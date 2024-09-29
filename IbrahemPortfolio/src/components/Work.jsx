import React from 'react'
import WorkItem from './WorkItem'

const data =[
    {
        year:"2024",
        title:"Spark",
        duration:"Present",
        details:"As a Front-End Developer and Team Lead at Spark Company, I lead the front-end team and oversee the training of aspiring developers. My role involves managing a team of front-end developers and mentoring trainees in building modern, scalable applications using React.js, ensuring they gain the skills needed to excel in the field."
      },
    {
      year:"2024",
      title:"Spark",
      duration:"Present",
      details:"As a Front-End Developer and Team Lead at Spark Company, I lead the front-end team and oversee the training of aspiring developers. My role involves managing a team of front-end developers and mentoring trainees in building modern, scalable applications using React.js, ensuring they gain the skills needed to excel in the field."
    },
    {
      year:"2024",
      title:"Spark",
      duration:"Present",
      details:"As a Front-End Developer and Team Lead at Spark Company, I lead the front-end team and oversee the training of aspiring developers. My role involves managing a team of front-end developers and mentoring trainees in building modern, scalable applications using React.js, ensuring they gain the skills needed to excel in the field."
    },
]
const work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item,idx)=>(
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  )
}

export default work