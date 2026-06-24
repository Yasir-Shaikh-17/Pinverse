import React, { cloneElement } from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  console.log(collection)

  return (
    <div className='flex items-center justify-center gap-5 flex-wrap py-10'>
      {collection.map((item, ind)=>{
        return <CollectionCard key={ind} item={item} />
      })}
    </div>
  )
}

export default CollectionPage
