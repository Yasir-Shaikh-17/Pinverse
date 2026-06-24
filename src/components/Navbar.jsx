import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' bg-purple-600 flex justify-between items-center px-10 py-5'>
            <h1 className='font-black'>PINVERSE</h1>

            <div className='flex items-center gap-5'>
                <Link className='bg-black text-white px-5 py-2 rounded ' to={"/"}>Search</Link>
                <Link className='bg-black text-white px-5 py-2 rounded ' to={"/collection"}>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar
