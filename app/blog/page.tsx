import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { getAllBlogPosts } from '@/lib/blog-data'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata = {
  title: 'Blog - Íjászati Tudás és Tippek',
  description: 'Olvass cikkeket az íjászat, képzés, verseny és közösség témáról.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-background via-background to-card/30 py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="hero-heading mb-6">Blog</h1>
            <p className="section-subheading max-w-2xl">
              Tanulj az íjászatról, versenyekről, képzésről és a közösség legújabb híreiből.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories */}
            <div className="mb-12 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="inline-block px-4 py-2 bg-muted text-foreground text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block card-subtle hover:shadow-lg hover:border-accent/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime} perc olvasás
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                        Olvass tovább <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
