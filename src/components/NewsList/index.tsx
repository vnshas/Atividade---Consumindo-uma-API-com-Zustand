import { useEffect } from "react"
import { useNewsDataStore } from "../../stores/useNewsDataStore"
import { NewsCard } from "./NewsCard"

export const NewsList= () => {
    
    const {newsData,loadNewsData, loading, error} = useNewsDataStore((store) => store)

    useEffect(() => {
        loadNewsData()
    }, [])
    
    return(
        <ul>
            {loading ? <p>Carregando</p> : newsData.map(news => (
                <NewsCard  news={news}/>
            ))}
            {error ? <p>{error}</p> : null}
        </ul>
    )
}