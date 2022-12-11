import React from 'react'

const Project = ({title, bgImage, deployLink, codeLink}) => {
  return (
    <div style={{backgroundImage:`url(${bgImage})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
    <div className='opacity-0 group-hover:opacity-100'>  

    <span className='text-2xl font-bold text-gray-300 tracking-wider'>
        {title}
    </span>
    <div className='pt-8 text-center'>
     <a href={deployLink}>
        <button className='text-center rounded-lg px-4 py-5 m-2 hover:bg-white text-gray-700 font-bold text-lg'>Demo</button>
        </a>
    <a href={codeLink}>
        <button>Code</button>
    </a>
    </div>
</div>
</div>
  )
}

export default Project