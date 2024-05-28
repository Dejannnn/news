import Link from 'next/link'

export default function NotFoundPage(context) {
    return (
        <div id="error">
            <h2>Not Found</h2>
            <p>Artice with id not exist</p>
            <Link href="/">Return Home</Link>
        </div >
    )
}