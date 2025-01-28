import { INews } from "../../../stores/useNewsDataStore"

interface InewsCardProps{
    news: INews
}

export const NewsCard = ({news}: InewsCardProps) => {
    
    
    return(
        <li key={news.id}>
        <span>{news.category}</span>
        <h3>{news.title}</h3>
        <p>{news.content}</p>
        </li>
    )
}