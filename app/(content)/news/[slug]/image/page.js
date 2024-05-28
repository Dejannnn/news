import Image from "next/image";
import { notFound } from "next/navigation";

//Data
import { getNewsItem } from "@/lib/news"

//Compnent
import FullscreenComponent from "@/components/news/full-screen"

export default async function ImagePage({ params: { slug } }) {

    const newDetail = await getNewsItem(slug)
    if (!newDetail) {
        notFound();
    }
    return (
        <FullscreenComponent>
            <Image src={`/images/news/${newDetail.image}`} alt={newDetail.title} sizes="100vw" width={500} height={500}
                style={{
                    width: '100%',
                    height: 'auto',
                }} />
        </FullscreenComponent>
    )
}