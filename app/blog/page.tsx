import type { Post } from "@/types";
import PostCard from "@/components/PostCard";

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_API_URL}/posts-meta.json`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-300">
      <h2 className="text-3xl text-gray-800 font bold mb-8">Blog</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
