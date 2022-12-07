import React from 'react'
import {HiArrrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[100px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p> Hi my name is </p>
            <h1>Dimitra Anastasopoulos</h1>
            <h2>I am a Full Stack Developer.</h2>
            <p> I'm a full-stack developer with a strong skillset in building web applications and solving problems. I graduated from Ohio State's Coding Bootcamp in January 2023. I have worked in teams to create projects. My goal is to create efficient products to help users have a seamless experience. I have a passion for learning new things, problem-solving, and collaborating. </p>
            <div>
                <button>My Work </button>
            </div>
        </div>
    </div>
  )
}

export default Home
