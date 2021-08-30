import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://nm-blog.herokuapp.com',
    key: 'e15e1c7e5891047ef897371fe3',
    version: "v4"
  });

// Grab all posts from Ghost
export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

//get each individual post
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}