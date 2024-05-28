//Lib
import {getNewsItem} from "@/lib/news"

import Image from 'next/image';
import Link from "next/link";
import { notFound } from 'next/navigation'
import { Suspense } from "react";

async function NewsDetailComponent ({slug}){
    const newDetail = await getNewsItem(slug)
    if (!newDetail) {
        notFound();
    }
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${slug}/image`}>
                    <Image alt={newDetail.content} width={100} height={100} src={`/images/news/${newDetail.image}`} />
                </Link>
                <h1>{newDetail.title}</h1>
                <time dateTime={newDetail.date}>{newDetail.date}</time>
            </header>
            <p>{newDetail.content}</p>
        </article>
    )
}

export default async function NewsDetailPage({ params: { slug } }) {
    return (
        <Suspense fallback={<p>Loading news detail...</p>}>
            <NewsDetailComponent slug={slug}/>
        </Suspense>
    )
}