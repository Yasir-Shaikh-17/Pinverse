import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { setQuery, setErrors, setLoading, setResults, setActiveTabs, clearSearch } from "../redux/features/searchSlice"
import { useEffect } from "react"
import ResultCard from "./ResultCard"

const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
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
                        src: item.urls.full,
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

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="flex items-center justify-center gap-5 flex-wrap py-10">
            {results.map((item, ind) => {
                return <ResultCard key={ind} item={item}/>
            })}
        </div>
    )
}

export default ResultGrid
