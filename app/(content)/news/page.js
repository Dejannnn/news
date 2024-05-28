//Lib
import { getAllNews } from "@/lib/news"
//Components
import NewsList from "@/components/news/news-list"
import { Suspense } from "react";

async function NewsComponent() {
    const news = await getAllNews();
    return  <NewsList news={news} />
}

export default async function NewsPage() {

    return (
        <>
            <h1>News Page</h1>
            <Suspense fallback={<p>Loading feed...</p>}>
                <NewsComponent />
            </Suspense>
        </>
    )
}