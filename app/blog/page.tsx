import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/legal-data';

export const metadata: Metadata = {
  title: 'Blog | Lawyer Capital VA',
  description: 'Articles on legal virtual assistants, law firm operations, and VA best practices.',
};

export default function BlogPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">Blog</h1>
        <p className="text-lg text-text-mid font-300 mb-16">
          Articles on legal virtual assistants, law firm operations, delegation strategies, and VA best practices.
        </p>

        <div className="grid gap-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-text-light/10 pb-12 last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-serif text-2xl text-charcoal mb-3 hover:text-brass transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-base text-text-mid font-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block text-xs text-brass font-600 tracking-wider uppercase hover:text-brass-light transition-colors"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
