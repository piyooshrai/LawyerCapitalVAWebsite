import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/legal-data';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title} | Lawyer Capital VA`,
    description: post?.excerpt || 'Legal VA blog article',
    keywords: post?.keyword,
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="pt-32 text-center">Post not found</div>;
  }

  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-3xl mx-auto px-16 py-20">
        <div className="mb-12">
          <Link href="/blog" className="text-xs text-brass font-600 tracking-wider uppercase hover:text-brass-light transition-colors">
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="font-serif text-5xl text-charcoal mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-text-mid font-300">{post.excerpt}</p>
        </header>

        <section className="prose prose-sm max-w-none">
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            Blog post content for "{post.title}" would be generated from MDX files. This is a placeholder showing the blog infrastructure is ready for content expansion.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-12 mb-6">Learn More</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            For more information about legal virtual assistant services, visit our <Link href="/about" className="text-brass hover:text-brass-light">About page</Link> or <Link href="/services" className="text-brass hover:text-brass-light">Services</Link>.
          </p>
        </section>

        <section className="mt-16 pt-12 border-t border-text-light/10">
          <h3 className="font-serif text-2xl text-charcoal mb-8">Ready to delegate?</h3>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all"
          >
            Schedule a Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
