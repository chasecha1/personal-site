import { client } from "@/sanity/lib/client"
import { secondClient } from "@/sanity/lib/client";

export async function getProjects() {
  try {
    const data = await secondClient.fetch(
      `*[_type == "project"]{
          _id,
          title,
          link,
          description,
          mainImage,
        }`
    );
    return data
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null
  }
}