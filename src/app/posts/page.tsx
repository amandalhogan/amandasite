import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function PostsIndex() {
  // This function looks into your "_posts" folder and gets all the titles
  const allPosts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 bg-[#fdfbf7] min-h-screen">
      <Link href="/" className="text-xs uppercase tracking-widest text-emerald-800 font-bold hover:underline">
        ← Back to Portfolio
      </Link>
      
      <h1 className="text-5xl font-serif mt-12 mb-4 text-gray-900">Garden Logs</h1>
      <p className="text-gray-500 italic mb-16">Field notes on biology, space, and art.</p>

      <div className="space-y-12">
        {allPosts.map((post) => (
          <article key={post.slug} className="border-b border-gray-100 pb-10">
            <Link href={`/posts/${post.slug}`} className="group">
              <h2 className="text-3xl font-medium group-hover:text-emerald-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {post.excerpt || "Read more about this project..."}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-tighter">
                  {post.date}
                </span>
                <span className="text-emerald-600 text-sm group-hover:translate-x-1 transition-transform">
                  Read Log →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}