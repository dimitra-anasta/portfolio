import React from 'react'
import DnsImg from '../assets/dns.png';
import partyPlanner from '../assets/partyplanner.png';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#a66baf]'>Work</p>
                <p className='py-6'>Check out some of my recent work: </p>
            </div>
            {/* container: */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid item: */}
                <div style={{backgroundImage:`url(${DnsImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>   
                        <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                            Server-side API Application
                        </span>
                        <div className='pt-8 text-center'>
                         <a href="/https://shahidhashmi1.github.io/DNS-Live/">
                            <button className='text-centre rounded-lg px-4 py-5 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                        <a href="/https://github.com/ShahidHashmi1/DNS-Live">
                            <button>Code</button>
                        </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${partyPlanner})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>   
                        <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                            Full-stack Application
                        </span>
                        <div className='pt-8 text-center'>
                         <a href="/">
                            <button className='text-centre rounded-lg px-4 py-5 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                        <a href="/">
                            <button>Code</button>
                        </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Work