import { useEffect } from "react"
import { useNewsDataStore } from "../../stores/useNewsDataStore"

export const NewsList= () => {
    
    const {newsData,loadNewsData, loading, error} = useNewsDataStore((store) => store)

    useEffect(() => {
        loadNewsData()
    }, [])
    
    return(
        <ul>
            {loading ? <p>Carregando</p> : newsData.map(news => (
                <li key={news.id}>
                    <span>{news.category}</span>
                    <h3>{news.title}</h3>
                    <p>{news.content}</p>
                </li>
            ))}
            {error ? <p>{error}</p> : null}
        </ul>
    )
}