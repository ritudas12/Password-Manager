import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
        <div className="logo 
        font-bold text-white text-2xl">
             <span className='text-green-500'> </span>
            
            Keep
            <span className='text-green-500'>In</span>
           
            </div>
            <div className='flex justify-center items-center'>
                Created with <img className='w-5 mx-2 ' src="/love.png" alt="" />by Ritu
            </div>
      
    </div>
  )
}

export default Footer
