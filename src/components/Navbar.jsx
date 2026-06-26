import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearHome } from '../redux/features/searchSlice'

const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogoClick = () =>{
        dispatch(clearHome())
    }

    return (
        <div className=' bg-[#fa3e48] flex justify-between items-center px-5 h-[14svh]'>

            <Link to={"/"} onClick={handleLogoClick} className='flex items-center gap-2 sm:gap-3'>
                <img className='h-12 sm:h-14' src="logo.png" alt="" />
                <h2  className='font-black text-3xl sm:text-4xl text-[#F6EEE3]'>PINVERSE</h2>
            </Link>

            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                <Link className='bg-[#F6EEE3] text-[#FF5C64] w-full sm:w-auto text-xs sm:text-base px-3 py-1 sm:px-5 sm:py-2 rounded font-bold active:scale-95 uppercase shadow-xl flex justify-center items-center' to={"/"}>Home</Link>
                <Link className='bg-[#F6EEE3] text-[#FF5C64] w-full sm:w-auto text-xs sm:text-base px-3 py-1 sm:px-5 sm:py-2 rounded font-bold active:scale-95 uppercase shadow-xl flex justify-center items-center' to={"/collection"}>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar
