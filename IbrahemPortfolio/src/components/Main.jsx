import React from 'react'
import img from '../assets/Hero-background.png'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebookF,FaInstagram,FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left ' src={img} alt='/' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:itmes-start items-center'>
                <h1 className='sm:text-4xl text-3xl font-bold text-gray-800'>I'm Ibrahem Mohammad</h1>
                <h2 className='flex sm:text-4xl text-3xl font-bold pt-4 text-gray-800'>I'm a</h2> 
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>                   
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Front-end Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'head of front-end team in Spark company',
                            2000,
                        ]}
                        wrapper="div"
                        speed={10}
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em',padding: '5px',  }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaFacebookF className='cursor-pointer' size={20} />
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main