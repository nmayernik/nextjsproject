import Link from "next/link"

export default function HelloCard({ post }) {
    const { title, slug, description, publishDate } = post.fields

    return (
            <div className="">
                <a className="text-xl font-serif font-semibold">{ title }</a>
                <p id="description" className="pt-1 font-mono text-sm font-regular text-system-dark dark:text-system-light dark:text-opacity-70">{ description }</p>
                <p id="date" className="pt-3 text-sm font-mono text-system-dark dark:text-system-light dark:text-opacity-40">{ publishDate }</p>
            </div>
    )
}