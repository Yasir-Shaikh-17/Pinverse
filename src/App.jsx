import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer, Zoom } from 'react-toastify'


const App = () => {


  return (
    <div className='min-h-screen bg-[#F6EEE3]'>

      <Navbar />

      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Zoom}
      />

    </div>
  )
}

export default App
