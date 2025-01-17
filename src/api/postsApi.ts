import { client } from "@/sanity/lib/client"
import { secondClient } from "@/sanity/lib/client";

export async function getPosts() {
  try {
    const data = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          slug,
          publishedAt
        }`
    );
    return data
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const data = await client.fetch(
      `*[_type == "post" && slug.current == $slug]{
          _id,
          title,
          slug,
          body,
          publishedAt
        }`,
        { slug }
    );
    return data
  } catch (error) {
    console.error('Error fetching post:', error);
    return null
  }
}