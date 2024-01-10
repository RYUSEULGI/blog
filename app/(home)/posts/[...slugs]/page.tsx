import { Comments } from '@/components/comments'
import LinkHover from '@/components/link-hover'
import { PostBody } from '@/components/post/post-body'
import { PostFooter } from '@/components/post/post-footer'
import { PostHeader } from '@/components/post/post-header'
import { getPostBySlug } from '@/libs/post'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

import { notFound } from 'next/navigation'

export default async function PostDetailPage({
  params,
}: {
  params: { slugs: string[] }
}) {
  const [category, slug] = params.slugs

  const { post, prevPost, nextPost } = getPostBySlug(category, slug)

  if (!post) {
    return notFound()
  }

  return (
    <>
      <article>
        <PostHeader title={post.title} date={post.date} />
        <PostBody content={post.body.code} />
        <PostFooter tags={post.tags ?? []} />
        <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
          {prevPost ? (
            <LinkHover
              href={`/posts/${category}/${prevPost._raw.sourceFileName}`}
              className="p-3"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <p className="max-w-xs truncate font-semibold">
                {prevPost.title}
              </p>
            </LinkHover>
          ) : (
            <div />
          )}

          {nextPost && (
            <LinkHover
              href={`/posts/${category}/${nextPost._raw.sourceFileName}`}
              className="p-3"
            >
              <p className="max-w-sm truncate font-semibold">
                {nextPost.title}
              </p>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </LinkHover>
          )}
        </div>
      </article>
      <Comments />
    </>
  )
}
