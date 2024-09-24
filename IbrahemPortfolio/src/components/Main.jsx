import React from 'react'
import img from '../assets/Hero-background.png'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebookF,FaInstagram,FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left ' src={img} alt='' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
            <div>
                <h1>I'm Ibrahem Mohammad</h1>
                <h2>I'm a 
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
                        repeat={Infinity}
                        style={{ fontSize: '1em',padding: '5px',  }}
                    />
                </h2>
                <div>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main