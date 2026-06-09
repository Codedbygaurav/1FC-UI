import BlogHero from '@/components/blog/BlogHero'
import FeaturedArticle from '@/components/blog/FeaturedArticle'
import LatestArticles from '@/components/blog/LatestArticle'
import NewsletterCTA from '@/components/blog/NewsletterCTA'


export default function BlogPage() {
  return (
    <div>
        <BlogHero/>
        <FeaturedArticle/>
        <LatestArticles/>
        <NewsletterCTA/>
      
    </div>
  )
}
