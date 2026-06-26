import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }

    return (
        <div className='h-80 w-72 shrink-0 rounded-lg shadow-xl'>

            <a href={item.url} target='_blank'>
                {item.type == "photo" ? <img className='w-full object-cover rounded-t h-[80%]' src={item.src} alt="" /> : ""}
                {item.type == "video" ? <video className='w-full object-cover rounded-t h-[80%]' autoPlay loop muted src={item.src}></video> : ""}
            </a>

            <div className='h-[20%] px-4 w-full bg-[#FF5C64]/90 flex items-center justify-between gap-5 overflow-hidden rounded-b'>
                <h1 className='text-[#F6EEE3] text-xl font-semibold truncate'>{item.title}</h1>
                <button onClick={() => { removeFromCollection(item) }} className='px-4 py-1 rounded bg-[#F6EEE3] font-semibold shadow-xl  text-[#FF5C64] text-lg uppercase active:scale-95 cursor-pointer'>Remove</button>
            </div>

        </div>
    )
}

export default CollectionCard
