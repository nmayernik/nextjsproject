import Link from "next/link";

export default function PostCard({ post }) {
	const { title, slug, description, publishDate } = post.fields;

	return (
		<Link href={"/writing/" + slug}>
			<div className="cursor-pointer my-0.5 px-6 py-6 rounded-xl shadow bg-system-white dark:bg-opacity-5 hover:text-system-blue">
				<a className="font-serif text-2xl font-semibold leading-tight">
					{title}
				</a>
				<p
					id="description"
					className="pt-1 text-base font-regular text-system-dark dark:text-system-light dark:text-opacity-70"
				>
					{description}
				</p>
				<p
					id="date"
					className="pt-3 font-mono text-sm text-system-dark dark:text-system-light dark:text-opacity-40"
				>
					{publishDate}
				</p>
			</div>
		</Link>
	);
}
