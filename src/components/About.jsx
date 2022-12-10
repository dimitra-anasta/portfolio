import React from 'react'

 const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
             <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a66baf]'>About</p>
                </div>
                    <div>
                    </div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi, I'm Dimitra, nice to meet you. Thanks for stopping by.</p>
                    </div>
                    <div>
                        <p>Full-stack developer with a strong skillset in building web applications and solving problems. I graduated from Ohio State's Coding Bootcamp. I have worked in teams to create projects. My goal is to create efficient products to help users have a seamless experience. I have a passion for learning new things, problem-solving, and collaborating.</p>
                    </div>
                    </div>
             </div>
        </div>
  )
}

export default About