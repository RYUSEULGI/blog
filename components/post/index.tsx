import { Post } from '@/interface/post'
import { PostBody } from './post-body'
import { PostHeader } from './post-header'

export function PostContainer({ post }: { post: Post }) {
  return (
    <>
      <PostHeader title={post.title} date={post.date} />
      <PostBody content={post.content ?? ''} />
    </>
  )
}
