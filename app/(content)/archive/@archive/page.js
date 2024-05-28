import { getAvailableNewsYears } from "@/lib/news";

//Componets
import NewsHeader from "@/components/news/news-header";

export default async function ArchivePage(){
    const links = await getAvailableNewsYears();

    return (
        <NewsHeader links={links} routePath="/archive/" />
    );
}