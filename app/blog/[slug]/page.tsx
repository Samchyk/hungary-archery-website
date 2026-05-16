import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const currentIndex = allPosts.findIndex(p => p.id === post.id)
  const nextPost = allPosts[currentIndex + 1]
  const prevPost = allPosts[currentIndex - 1]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-background via-background to-card/30 py-12 md:py-16 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Vissza a blogra
            </Link>
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                {post.category}
              </span>
              <h1 className="hero-heading">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('hu-HU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} perc olvasás
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
            <div className="prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent/80 whitespace-pre-wrap">
              {post.content.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) {
                  return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>
                }
                if (line.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>
                }
                if (line.startsWith('- ')) {
                  return <li key={idx} className="text-foreground/80 ml-4">{line.replace('- ', '')}</li>
                }
                if (line.trim() === '') {
                  return <br key={idx} />
                }
                return <p key={idx} className="text-foreground/80 mb-4">{line}</p>
              })}
            </div>
          </article>
        </section>

        {/* Navigation */}
        <section className="py-12 md:py-16 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prevPost && (
                <Link href={`/blog/${prevPost.id}`} className="card-subtle hover:shadow-lg hover:border-accent/50 transition-all group">
                  <div className="text-sm text-muted-foreground mb-2">Előző cikk</div>
                  <h3 className="font-bold group-hover:text-accent transition-colors line-clamp-2">{prevPost.title}</h3>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.id}`} className="card-subtle hover:shadow-lg hover:border-accent/50 transition-all group md:col-start-2">
                  <div className="text-sm text-muted-foreground mb-2">Következő cikk</div>
                  <h3 className="font-bold group-hover:text-accent transition-colors line-clamp-2">{nextPost.title}</h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
