import React from 'react'

const Contact = () => {
  return (
    <div className=''>
    <div name='contact' className='w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4'>
        <form method ='POST' action="https://getform.io/f/3d00c629-5a52-4033-b610-b0bb0d852ec1" className='items center flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a66baf] text-gray-300'>Contact</p>
                <p  className='text-gray-300 py-4'>Submit the form below or send me an email - dimitra.anasta524@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6]' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#a66baf] px-4 py-3 my-8 mx-auto '>Let's Connect</button>
        </form>
        </div>
        </div>
  )
}

export default Contact