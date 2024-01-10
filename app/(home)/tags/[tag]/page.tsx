import { PostList } from '@/components/pages/posts/post-list'
import Title from '@/components/typography/title'
import { getPostListByTag } from '@/libs/post'

export default function TagPostPage({ params }: { params: { tag: string } }) {
  const posts = getPostListByTag(params.tag)

  return (
    <div className="flex flex-col items-start">
      <Title>{params.tag}</Title>
      <div className="mt-4">
        <PostList posts={posts} />
      </div>
    </div>
  )
}
