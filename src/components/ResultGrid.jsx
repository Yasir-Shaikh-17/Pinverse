import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { setQuery, setErrors, setLoading, setResults, setActiveTabs, clearSearch } from "../redux/features/searchSlice"
import { useEffect } from "react"
import ResultCard from "./ResultCard"
import SkeletonCard from "./SkeletonCard"
import noItemImage from "../assets/images/noItem.png"

const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    console.log(results.length)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!query) return

        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == "photos") {
                    let response = await fetchPhotos(query)

                    data = response.results.map((item) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.small,
                        url: item.links.html
                    }))
                }
                if (activeTab == "videos") {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name || "Video",
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setErrors(err.message))
            }
        }

        getData()

    }, [query, activeTab])

    const skeletonCardArray = Array.from({ length: 20 })


    if (error) return <><div className='h-[60svh] flex justify-center items-center flex-col gap-2 sm:gap-5'>
        <img className='h-48 sm:h-96' src={noItemImage} alt="" />
        <h1 className='text-5xl lg:text-8xl text-[#FF5C64] font-bold uppercase text-center'>No items found</h1>
    </div>
    </>

    if (loading) return (

        <div className="flex items-center justify-center flex-wrap mx-5 gap-5 overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400 h-[82%] mt-2 pt-5">
            {skeletonCardArray.map((_, ind) => {
                return <SkeletonCard key={ind} />
            })}
        </div>

    )

    return (
        <div className="h-[82%]">

            {results.length > 0 ?

                <div className="flex items-center justify-center flex-wrap mx-5 gap-5 overflow-y-auto scrollbar-thin scrollbar-track-[#FF5C64] scrollbar-thumb-[#F6EEE3] h-full mt-2">
                    {results.map((item, ind) => {
                        return <ResultCard key={ind} item={item} />
                    })}
                </div>

                :

                <div className="flex items-center justify-center mx-5 gap-5 h-full mt-2">

                    <div className='flex justify-center items-center flex-col gap-2 sm:gap-5'>
                        <img className='h-48 sm:h-72' src={noItemImage} alt="" />
                        <h1 className='text-4xl md:text-5xl lg:text-8xl text-[#FF5C64] font-bold uppercase text-center'>No items found</h1>
                    </div>

                </div>

            }

        </div>
    )
}

export default ResultGrid
