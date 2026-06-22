import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ["photos", "videos"]
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className='flex gap-10'>

            {tabs.map((e, ind) => {
                return <button
                    key={ind}
                    onClick={() => {
                        dispatch(setActiveTabs(e))
                    }}
                    className={`${activeTab==e?"bg-green-400":"bg-gray-600"} border border-white rounded active:outline-0 placeholder:text-white px-4 py-2 cursor-pointer active:scale-95 uppercase transition`}
                >{e}</button>
            })}

        </div>
    )
}

export default Tabs
