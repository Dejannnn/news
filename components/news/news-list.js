import Link from "next/link";
import Image from "next/image";


export default function NewsList({news}) {
    let errorMessage = undefined;
    if(!news.length){
    errorMessage = (<p>Not found news</p>)
    }
    return (
        <>
        <ul className="news-list">
            {news.map(newDetail =>
                <li key={newDetail.id}>
                    <Link href={`/news/${newDetail.slug}`}>
                        <Image alt={newDetail.content} width={150} height={150} src={`/images/news/${newDetail.image}`} />
                    </Link>
                    <span>{newDetail.title}</span>
                </li>
            )}
        </ul>
        {errorMessage}
        </>
    );
}