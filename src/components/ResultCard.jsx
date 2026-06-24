import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCollection = (item) => {        
        dispatch(addCollection(item))
        dispatch(addToast())
    }

    return (
        <div className='h-80 w-72 shrink-0 bg-white relative'>

            <a href={item.url} target='_blank'>
                {item.type == "photo" ? <img className='h-full w-full object-cover' src={item.src} alt="" /> : ""}
                {item.type == "video" ? <video className='h-full w-full object-cover' autoPlay loop muted src={item.src}></video> : ""}
            </a>

            <div className='h-[20%] absolute bottom-0 px-4 w-full bg-black/70 flex justify-between gap-5 overflow-hidden'>
                <h1 className='text-white text-xl font-semibold'>{item.title}</h1>
                <button onClick={() => { addToCollection(item) }} className='px-4 py-1 rounded bg-emerald-400 text-white text-lg active:scale-95 cursor-pointer'>Save</button>
            </div>

        </div>
    )
}

export default ResultCard