import ArticleContent from '@/components/blog-detail/ArticleContent'
import ArticleCover from '@/components/blog-detail/ArticleCover'
import ArticleCTA from '@/components/blog-detail/ArticleCTA'
import BlogArticleHero from '@/components/blog-detail/BlogArticleHero'
import RelatedArticles from '@/components/blog-detail/RelatedArticle'
import React from 'react'

export default function BlogDetailsPage() {
  return (
    <div>
        <BlogArticleHero/>
        <ArticleCover/>
        <ArticleContent/>
        <RelatedArticles/>
        <ArticleCTA/>
      
    </div>
  )
}
