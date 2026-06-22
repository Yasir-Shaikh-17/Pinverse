import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {


  return (
    <div className='min-h-screen bg-gray-900 text-white'>

      <SearchBar />
      <Tabs />
      <ResultGrid />

    </div>
  )
}

export default App
