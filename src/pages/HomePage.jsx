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

            {query != "" ? <div className='h-[75vh] '> <Tabs /> <ResultGrid /> </div> :

                <div className='h-[75vh] flex justify-center items-center flex-col gap-5'>
                    <div className='flex items-center gap-5'>
                        <img className='h-40' src={logo} alt="" />
                        <h1 className='text-9xl font-bold text-[#FF5C64] uppercase'>Pinverse</h1>
                    </div>
                    <h2 className='text-[#FF5C64] text-5xl font-bold uppercase'>Your Universe of Images & Videos</h2>
                </div>

            }

        </div>
    )
}

export default HomePage
