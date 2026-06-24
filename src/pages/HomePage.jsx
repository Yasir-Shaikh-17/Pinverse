import React from 'react'

import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'

const HomePage = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div>



            <SearchBar />

            {query != "" ? <div>
                <Tabs />
                <ResultGrid />
            </div> : ""}


            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />

        </div>
    )
}

export default HomePage
