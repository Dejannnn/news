import { getNewsForYear, getAvailableNewsMonths } from "@/lib/news";
import Link from 'next/link';
import Image from 'next/image';

//Components
import NewsList from "@/components/news/news-list"
import NewsHeader from "@/components/news/news-header"; "@/components/news/news-header"


export default async function FilteredNewsPage({ params: { year } }) {
    const newsByYear = await getNewsForYear(year);
    const availableNewsMonths = await getAvailableNewsMonths(year);

    return (
        <>
            <NewsHeader links={availableNewsMonths} routePath={`/archive/${year}/`} />
            <NewsList news={newsByYear} />
        </>
    )
}