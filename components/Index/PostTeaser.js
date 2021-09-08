import Link from "next/link"

export default function PostTeaser({ post }) {
    const { title, slug, description, publishDate } = post.fields

    return (
        <Link href={'/writing/' + slug}>
            <div className="cursor-pointer px-1 my-5 rounded-lg hover:text-system-blue">
                <a className="text-lg leading-tight font-serif font-semibold text-system-dark dark:text-system-light dark:text-opacity-90 hover:text-system-blue">{ title }</a>
                <p id="date" className="text-md uppercase text-system-dark dark:text-system-light dark:text-opacity-40">{ publishDate }</p>
            </div>
        </Link>
    )
}