import React, { cloneElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import deleteIcon from "../assets/svgs/delete.svg"
import { clearSearch } from '../redux/features/searchSlice'
import { clearCollection, deleteCollectionToast } from '../redux/features/collectionSlice'
import noCollection from "../assets/images/noCollection.png"

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const deleteCollection = () => {

    let deleteConfirm = confirm("Do you really want to delete your collection?")

    if (deleteConfirm) {
      dispatch(clearCollection())
      dispatch(deleteCollectionToast())
    }
  }

  return (
    <div>
      {collection.length > 0 ?


        <div className='h-[86svh]'>

          <div className='h-[15%] flex items-center justify-between px-5'>

            <h2 className='text-2xl sm:text-4xl text-[#fa3e48] font-bold uppercase'>Your Collection</h2>

            <button className='bg-[#fa3e48] px-6 py-2 sm:px-4 sm:py-2 rounded shadow-xl active:scale-95 cursor-pointer flex items-center gap-2 uppercase text-[#F6EEE3] font-semibold' onClick={() => { deleteCollection() }}>
              <p className='hidden sm:block'>Delete Collection</p>
              <img className='h-6 sm:h-8' src={deleteIcon} alt="" />
            </button>

          </div>

          <div className='h-[85%] flex justify-center gap-5 flex-wrap py-5 overflow-auto scrollbar-thin scrollbar-track-[#FF5C64] scrollbar-thumb-[#F6EEE3]'>
            {collection.map((item, ind) => {
              return <CollectionCard key={ind} item={item} />
            })}
          </div>

        </div>

        : //ALTERNATE

        <div className='h-[86svh] flex justify-center items-center gap-5 flex-col'>

          <img className='h-60 sm:h-80' src={noCollection} alt="" />
          <h2 className='text-[#FF5C64] text-3xl text-center sm:text-4xl font-bold uppercase'>Your collection is empty</h2>

        </div>

      }



    </div>
  )
}

export default CollectionPage
