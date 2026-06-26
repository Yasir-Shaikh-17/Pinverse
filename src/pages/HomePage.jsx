import React from 'react'

import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"

const HomePage = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div>



            <SearchBar />

            {query != "" ? <div className='h-[75svh] '> <Tabs /> <ResultGrid /> </div> :

                <div className='h-[75svh] flex justify-center items-center flex-col gap-2 sm:gap-5'>
                    <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                        <img className='h-32 lg:h-40' src={logo} alt="" />
                        <h1 className='text-5xl sm:text-7xl lg:text-9xl font-bold text-[#FF5C64] uppercase'>Pinverse</h1>
                    </div>
                    <h2 className='text-[#FF5C64] sm:text-3xl lg:text-5xl font-bold uppercase'>Your Universe of Images & Videos</h2>
                </div>

            }

        </div>
    )
}

export default HomePage
