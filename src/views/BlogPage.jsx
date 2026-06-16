import { Link } from "react-router-dom";
import { blogPosts } from "../data";

export function BlogPage() {
  return (
    <main className="min-h-screen bg-bg px-4 py-12 text-slate-100 md:px-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="font-mono text-sm uppercase tracking-wider text-neonBlue hover:text-white">
          &larr; Back to portfolio
        </Link>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-wide text-white">Blog</h1>
        <p className="mt-2 text-sm text-slate-300">Latest QA notes and automation insights.</p>
        <div className="mt-8 space-y-4">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-xl border border-slate-800 bg-card p-5">
              <p className="font-mono text-xs text-slate-400">{post.date}</p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-wide text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
