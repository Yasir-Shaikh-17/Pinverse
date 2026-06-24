import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' bg-[#fa3e48] flex justify-between items-center px-5 h-[14vh]'>

            <div className='flex items-center gap-3'>
                <img className='h-14' src="logo.png" alt="" />
                <Link to={"/"} className='font-black text-4xl text-[#F6EEE3]'>PINVERSE</Link>
            </div>

            <div className='flex items-center gap-5'>
                <Link className='bg-[#F6EEE3] text-[#FF5C64] px-5 py-2 rounded font-semibold active:scale-95 uppercase shadow-xl' to={"/"}>Home</Link>
                <Link className='bg-[#F6EEE3] text-[#FF5C64] px-5 py-2 rounded font-semibold active:scale-95 uppercase shadow-xl' to={"/collection"}>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar
