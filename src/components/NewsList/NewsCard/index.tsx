import { INews } from "../../../stores/useNewsDataStore"

interface InewsCardProps{
    news: INews
}

export const NewsCard = ({news}: InewsCardProps) => {
    
    
    return(
        <li key={news.id}>

        </li>
    )
}