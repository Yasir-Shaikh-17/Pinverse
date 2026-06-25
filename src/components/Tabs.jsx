import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ["photos", "videos"]
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
    const { query } = useSelector((store) => store.search)
    useEffect(() => {
        console.log(query)
    }, [query])

    return (
        <div className='flex justify-between items-center h-[12%] px-5'>

            <div>
                <h2 className='text-[#FF5C64] text-3xl font-bold uppercase underline'>{query}</h2>
            </div>

            <div className='flex items-center gap-5'>
                {tabs.map((e, ind) => {
                    return <button
                        key={ind}
                        onClick={() => {
                            dispatch(setActiveTabs(e))
                        }}
                        className={`${activeTab == e ? "bg-[#FF5C64]" : "bg-[#F6EEE3]"} border-2 border-[#FF5C64] rounded active:outline-0 px-4 py-2 cursor-pointer active:scale-95 uppercase transition ${activeTab == e ? "text-[#F6EEE3]" : "text-[#FF5C64]"} font-semibold shadow-xl`}
                    >{e}</button>
                })}
            </div>


        </div>
    )
}

export default Tabs
