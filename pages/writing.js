import Image from "next/image";
import Link from "next/link";
import { getPosts } from "lib/functions"

const Writing = (props) => (
    <div className="max-w-xl mx-auto py-24">
        <div>
            <ul>
            {props.posts.map((post) => (
                <li key={post.id} className="py-6">
                <Link href={`/posts/${post.slug}`}>
                    <a className="text-lg font-semibold dark:text-system-light">{post.title}</a>
                </Link>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
  
  export default Writing;
  
  export async function getStaticProps(context) {
    const posts = await getPosts();
  
    if (!posts) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { posts },
      revalidate: 1,
    };
  }