import { Post } from "@/types";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="bg-gray-300 p-6 rounded-lg shadow-2xl mb-4">
      <h3 className="text-2xl font-semibold text-gray-600">{post.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link
        href={`/blog${post.slug}`}
        className="text-gray-500 text-sm hover:underline"
      >
        Read More ➡️
      </Link>
    </article>
  );
};

export default PostCard;
