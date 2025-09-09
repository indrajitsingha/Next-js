import { blogData } from "@/app/data";
import { CalendarDays, Clock, User, ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { blogid } = await params
  const post = blogData?.find((value) => value.id === blogid)
  return {
    title: `${post?.title} | Blog| BlogSpace🚀`
  }
}

const BlogPage = async ({ params }) => {
  const { blogid } = await params;
  const post = blogData.find((val) => val.id === blogid);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Blog not found
        </h1>
        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-[80%] bg-white rounded-lg ">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all posts
      </Link>

      {/* Hero image */}
      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <img
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Article header */}
      <header className="mb-8">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500 text-white mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            <Heart className="h-4 w-4" />
            {post.likes}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            <MessageCircle className="h-4 w-4" />
            {post.comments}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </header>

      {/* Article content */}
      <article className="prose prose-gray max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="com flex flex-col gap-5  ">
        <h1 className="text-xl font-bold text-gray-900">Comments (3)</h1>
        <div className=" w-[100%] mx-auto px-4 py-8  bg-white rounded-lg shadow-lg flex flex-col gap-5 p-6">
          <label className="text-lg  text-gray-900">Leave a comment</label>
          <input type="text" className="w-[100%] py-2 px-3 border border-gray-300 rouded-lg focus:outline-none" />
          <textarea type="text" className="w-[100%] py-2 px-3 border border-gray-300 rouded-lg focus:outline-none" />
          <button className=" w-[200px] px-4 py-2 bg-green-500 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Post</button>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
