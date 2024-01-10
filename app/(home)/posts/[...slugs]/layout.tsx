import { getPostBySlug } from '@/libs/post'
import { baseUrl } from '@/libs/utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

export async function generateMetadata({
  params,
}: {
  params: { slugs: string[] }
}): Promise<Metadata> {
  const [category, slug] = params.slugs

  const { post } = getPostBySlug(category, slug)

  if (!post) {
    return notFound()
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
  }
}

export default function PostDetailLayout({
  params,
  children,
}: {
  params: { slugs: string[] }
  children: ReactNode
}) {
  const [category, slug] = params.slugs

  const { post } = getPostBySlug(category, slug)

  if (!post) {
    return notFound()
  }

  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${baseUrl}/posts/${category}/${post._raw.sourceFileName}#BlogPosting`,
    name: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${baseUrl}/posts/${category}/${post._raw.sourceFileName}`,
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postJsonLd),
        }}
      />
      {children}
    </div>
  )
}
