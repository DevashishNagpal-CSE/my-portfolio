import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
        <div className='mb-10'>
            <p className='text-white text-[13px]'>HELLO THERE, WELCOME TO MY SITE</p>
            <p className='text-white text-[40px] font-bold'>I'm Devashish</p>
            <p className='text-red-500 text-[40px] font-bold'> I Code</p>
            <p className='text-white text-[40px] font-bold'>Full Stack Developer</p>
            
        </div>
        <div className='flex justify-center '>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]'>
            <img src="./pfp.jpeg" className='h-full w-[250px] object-cover rounded-[20px]'/>
        </div>
        </div>
    </div>
  )
}

export default Hero