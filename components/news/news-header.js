import Link from "next/link";

export default function NewsHeader({links, routePath}){

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => (<Link key={link} href={`${routePath}${link}`} >{link}</Link>))}
                </ul>
            </nav>
        </header>
    )
}