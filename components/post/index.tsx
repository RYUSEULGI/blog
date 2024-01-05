import { Post } from '@/interface/post'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import LinkHover from '../link-hover'
import { PostBody } from './post-body'
import { PostFooter } from './post-footer'
import { PostHeader } from './post-header'

export function PostContainer({ post }: { post: Post | null }) {
  if (!post) {
    return <>error</>
  }

  return (
    <>
      <PostHeader title={post.title} date={post.date} />
      <PostBody content={post.content ?? ''} />
      <PostFooter />
      <div className="flex items-center justify-between pt-10">
        <LinkHover href="/" className="p-3">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          dddd
        </LinkHover>

        <LinkHover href="/" className="p-3">
          dfsfd
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </LinkHover>
      </div>
    </>
  )
}
