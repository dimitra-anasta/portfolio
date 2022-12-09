import React from 'react'
import Portrait from '../assets/portrait.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
     
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <img className='w-40 mx-auto' src={Portrait} alt='HTML icon' />
            <p className='text-white'> Hi my name is </p>
            <h1 className='text-4xl font-bold text-[#a66baf]'>Dimitra Anastasopoulos</h1>
            <h2 className='text-4xl font-cold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> Full-stack developer passionate in writing code and working with new technologies.</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#a66baf]'>My Work </button>
            </div>
        </div>
    </div>
  )
}

export default Home
