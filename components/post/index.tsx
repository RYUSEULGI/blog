'use client'

import { Post } from '@/interface/post'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import LinkHover from '../link-hover'
import { PostBody } from './post-body'
import { PostFooter } from './post-footer'
import { PostHeader } from './post-header'

interface Props {
  post: Post | null
  prevPost: Post | null
  nextPost: Post | null
}

export function PostContainer({ post, prevPost, nextPost }: Props) {
  const pathname = usePathname()
  const [, , category] = pathname.split('/')

  if (!post) {
    return <>error</>
  }

  return (
    <article>
      <PostHeader title={post.title} date={post.date} />
      <PostBody content={post.content} />
      <PostFooter tags={post.tags} />
      <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
        {prevPost ? (
          <LinkHover
            href={`/posts/${category}/${prevPost.slug}`}
            className="p-3"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            <p className="font-semibold">{prevPost.title}</p>
          </LinkHover>
        ) : (
          <div />
        )}

        {nextPost && (
          <LinkHover
            href={`/posts/${category}/${nextPost.slug}`}
            className="p-3"
          >
            <p className="font-semibold">{nextPost.title}</p>
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </LinkHover>
        )}
      </div>
    </article>
  )
}
