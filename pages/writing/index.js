import Image from "next/image";
import Link from "next/link";
import PostCard from "@components/PostCard";

import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "blogPost" });

	return {
		props: {
			posts: res.items,
		},
	};
}

export default function Writing({ posts }) {
	console.log(posts);
	return (
		<div className="max-w-3xl px-3 py-12 mx-auto">
			<h1 className="px-3 pt-3 font-serif font-bold text-title-desktop text-opacity-90">
				Writing
			</h1>
			<p></p>

			<div className="pt-8">
				<ul classname="">
					{posts.map((post) => (
						<li key={post.sys.id} className="py-2">
							<PostCard post={post} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
