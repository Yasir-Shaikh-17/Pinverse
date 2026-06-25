import React, { cloneElement } from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  console.log(collection)

  return (
    <div className='h-[86vh]'>

      <div className='h-[15%] bg-gray-300'>

      </div>

      <div className='h-[85%] flex justify-center gap-5 flex-wrap py-5 overflow-auto scrollbar-thin scrollbar-track-[#FF5C64] scrollbar-thumb-[#F6EEE3]'>
        {collection.map((item, ind) => {
          return <CollectionCard key={ind} item={item} />
        })}
      </div>

    </div>
  )
}

export default CollectionPage
