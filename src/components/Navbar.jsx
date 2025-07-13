import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo flex gap-1
        font-bold text-white text-2xl">
            <img className='w-10' src="/nav-logo.png" alt="" />
             <span className='text-green-500'></span>
            Keep
            <span className='text-green-500'>In</span>
            
            </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='nover:font-bold' href='/'>Home</a>
                <a className='nover:font-bold' href='#'>About</a>
                <a className='nover:font-bold' href='#'>Contact</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-600 my-5 rounded-full flex  justify-between items-center'>
            <img className='invert w-10 p-1' src="/github.png" alt="github-logo" />
            <span className='font-bold px-2'> Github</span>
           
            </button>
        
        </div>
    </nav>
  )
}

export default Navbar
