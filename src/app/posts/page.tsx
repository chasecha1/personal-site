import { getPosts } from "@/api/postsApi";
import { client } from "@/sanity/lib/client"
import Link from "next/link";
import { PostsProfile } from "../../../types/entities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Posts | Chase Cha',
  description: "A page that holds all of my blog posts. Check them out to see what I've been up to!"
};

export default async function Posts() {
    const posts: PostsProfile[] = await getPosts();
    return (
      <div className="bg-white dark:bg-light-navy text-navy-text dark:text-white min-h-screen">
        <div className="Post-list container pt-8 h-full flex flex-col items-center">
          <h1 className="Heading--head pb-4">All Posts</h1>
          <ul>
            {posts.map((post) => (
              <li key={post._id} className="flex flex-row text-sm md:text-base mb-2">
                <Link href={`/posts/${post.slug.current}`} className="Link--secondary">
                  <h2>{post.title}</h2>
                </Link>
                <p className="pl-4">Published on {new Date(post.publishedAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
    </div>
    );
  }