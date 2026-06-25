import React from 'react'
import image from "../assets/svgs/image.svg"

const SkeletonCard = () => {
    return (
        <div className='h-80 w-[23%] shrink-0 relative rounded-lg shadow-xl'>

            <div className='h-[80%] bg-gray-400 rounded-t flex justify-center items-center'>
                <img className='h-20 animate-pulse' src={image} alt="" />
            </div>

            <div className='h-[20%] px-4 w-full bg-gray-300 flex items-center justify-between gap-5 overflow-hidden rounded-b'>
                <div className='h-4 rounded w-full bg-gray-400 animate-pulse'></div>
                <button className='px-8 py-4 rounded bg-gray-400 shadow-xl animate-pulse'></button>
            </div>

        </div>
    )
}

export default SkeletonCard
