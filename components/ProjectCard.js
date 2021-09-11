import Link from "next/link";

export default function ProjectCard({ post }) {
	const { title, slug, description, client } = post.fields;

	return (
		<Link href={"/projects/" + slug}>
			<div className="cursor-pointer my-0.5 px-6 py-6 rounded-xl shadow bg-system-white dark:bg-opacity-5 hover:text-system-blue">
				
                <p id="client" className="pt-3 font-mono text-sm text-system-dark dark:text-system-light dark:text-opacity-40">
				    {client}
			    </p>
                <a className="font-serif text-2xl font-semibold leading-tight">
					{title}
				</a>
				<p id="description" className="pt-1 text-base font-regular text-system-dark dark:text-system-light dark:text-opacity-70">
					{description}
				</p>
				
			</div>
		</Link>
	);
}
