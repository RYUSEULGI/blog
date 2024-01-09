import LinkHover from '@/components/link-hover'
import { PostBody } from '@/components/post/post-body'
import { PostFooter } from '@/components/post/post-footer'
import { PostHeader } from '@/components/post/post-header'
import { Post } from '@/interface/post'
import { getAllPosts } from '@/libs/post'
import { baseUrl } from '@/libs/utils'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const posts = getAllPosts(['title', 'description', 'tags', 'slug'])
  const post =
    ((posts.find((post) => post.slug === params.slug) as unknown) as Post) ??
    null

  if (!post) {
    return notFound()
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
  }
}

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const posts = getAllPosts(['title', 'slug', 'date', 'content', 'tags'])
  const post =
    ((posts.find((post) => post.slug === params.slug) as unknown) as Post) ??
    null

  const index = posts.findIndex((post) => post.slug === params.slug)

  const prevPost = posts[index + 1] ?? null
  const nextPost = posts[index - 1] ?? null

  if (!post) {
    return notFound()
  }

  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${baseUrl}/posts/${post.slug}#BlogPosting`,
    name: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${baseUrl}/posts/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postJsonLd),
        }}
      />
      <article>
        <PostHeader title={post.title} date={post.date} />
        <PostBody content={post.content} />
        <PostFooter tags={post.tags} />
        <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
          {prevPost ? (
            <LinkHover href={`/posts/${prevPost.slug}`} className="p-3">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <p className="font-semibold">{prevPost.title}</p>
            </LinkHover>
          ) : (
            <div />
          )}

          {nextPost && (
            <LinkHover href={`/posts/${nextPost.slug}`} className="p-3">
              <p className="font-semibold">{nextPost.title}</p>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </LinkHover>
          )}
        </div>
      </article>
    </>
  )
}
