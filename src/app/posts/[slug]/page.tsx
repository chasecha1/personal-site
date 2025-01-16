import { PortableText } from "next-sanity";
import { PostsProfile } from "../../../../types/entities";
import { getPostBySlug } from "@/api/postsApi";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const param_slug = await params
  const post = await getPostBySlug(param_slug.slug);
  return {
    title: `${post[0].title} | Chase Cha`,
    description: `Read the article: ${post[0].title}.`,
  };
}

export default async function PostPage({ params }: { params: { slug: string }}) {
  const param_slug = await params
  const data: PostsProfile[] = await getPostBySlug(param_slug.slug)
  const post = data[0]

  const components = {
    block: {
      normal: ({ children }: any) => (
        <>
          <p>{children}</p>
          <br /> {/* Add spacing between blocks */}
        </>
      ),
    },
  };

  return (
    <div className="bg-white dark:bg-light-navy text-navy-text dark:text-white px-4 sm:px-10 md:px-32 lg:px-64 min-h-screen">
      <div className="Title Heading--head py-8">
        {post.title}
      </div>
      <div className="Content">
        <PortableText value={post.body} components={components}/>
      </div>
    </div>
  )
}