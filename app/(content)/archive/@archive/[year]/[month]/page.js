import { getNewsForYearAndMonth } from "@/lib/news";

//Components
import NewsList from "@/components/news/news-list"

export default async function FilteredNewPage({ params: { year, month } }) {
    const news = await getNewsForYearAndMonth(year, month);
    
    return (
        <NewsList news={news} />
    )
}