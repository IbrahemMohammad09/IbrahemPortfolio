import React from 'react'
import WorkItem from './WorkItem'

const data =[
    {
        year:"2024",
        title:"Spark",
        duration:"Present",
        details:"In spark company i am working as a front-end developer and the head of front-end team, also I supervise the training of a team of a group of trainees in the field of front-end development using React Js"
    },
    {
        year:"",
        title:"",
        duration:"",
        details:""
    },
    {
        year:"",
        title:"",
        duration:"",
        details:""
    },
]
const work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
    </div>
  )
}

export default work