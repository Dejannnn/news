import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestArchivePage(){
    const news= await getLatestNews();
    return (
        <NewsList news={news}></NewsList>
    );
}