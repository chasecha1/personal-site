import { PortableText } from "next-sanity";
import { PostsProfile } from "../../../../types/entities";
import { getPostBySlug } from "@/api/postsApi";
import { Metadata } from "next";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post[0].title} | Chase Cha`,
    description: `Read the article: ${post[0].title}.`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const data: PostsProfile[] = await getPostBySlug(slug)
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