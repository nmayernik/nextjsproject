export default function Post({ post }) {
	const { title, slug, description, publishDate } = post.fields;

	return (
		<li href={"/writing/" + slug}>
			<div className="rounded-lg cursor-pointer hover:text-system-blue">
				<a className="text-base font-bold leading-tight text-system-dark dark:text-system-light dark:text-opacity-90 hover:text-system-blue">
					{title}
				</a>
				<p
					id="date"
					className="uppercase text-md text-system-dark dark:text-system-light dark:text-opacity-40"
				>
					{}
				</p>
			</div>
		</li>
	);
}
