import { getSinglePost, getPosts } from "../../lib/functions";

const PostPage = (props) => {
  return (
    <div className="max-w-xl mx-auto py-24">
      <h1 className="text-3xl tracking-tight font-semibold">{props.post.title}</h1>
      <img className="rounded-xl" src={props.post.feature_image} />
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // "fallback: false" gives us a 404 if post not found
  return { paths, fallback: false };
}

// Pass the page slug to "getSinglePost()" function
// Which then passes it to "posts.read()" to query the GhostContentAPI
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}