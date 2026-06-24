import React from 'react'

const SkeletonCard = () => {
    return (
        <div className='h-80 w-[23%] shrink-0 relative rounded-lg shadow-lg'>

            <div className='h-[80%] bg-gray-400 rounded-t'>

            </div>

            <div className='h-[20%] px-4 w-full bg-[#FF5C64]/90 flex items-center justify-between gap-5 overflow-hidden rounded-b'>
                <h1 className='text-[#F6EEE3] text-xl font-semibold truncate'></h1>
                <button className='px-4 py-1 rounded bg-[#F6EEE3] font-semibold shadow-xl text-[#FF5C64] text-lg uppercase active:scale-95 cursor-pointer'>Save</button>
            </div>

        </div>
    )
}

export default SkeletonCard
