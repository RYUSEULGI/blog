import { Card } from '@/components/card'
import Grid from '@/components/layouts/grid'
import DefaultText from '@/components/typography/default-text'
import { Post, PostCategory } from '@/interface/post'
import { useEffect, useState } from 'react'

interface Props {
  posts: Post[]
}

export function PostCardList({ posts }: Props) {
  const [displayedPosts, setDisplayedPosts] = useState(posts)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setDisplayedPosts(posts.slice(0, 4))
      } else {
        setDisplayedPosts(posts.slice(0, 3))
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [posts])

  if (posts.length < 0) {
    return (
      <DefaultText className="text-neutral-400">
        최근 작성된 글이 없습니다.
      </DefaultText>
    )
  }

  return (
    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {displayedPosts.map((post) => (
        <PostCardListItem key={`post-card-${post.slug}`} post={post} />
      ))}
    </Grid>
  )
}

function PostCardListItem({ post }: { post: Post }) {
  const isAlgorithm = post.tags.includes(PostCategory.알고리즘)
  const category = isAlgorithm ? PostCategory.알고리즘 : PostCategory.글

  return (
    <Grid.Item>
      <Card
        href={`/posts/${category}/${post.slug}`}
        title={post.title}
        description={post.description}
        thumbnail={post.thumbnail}
      />
    </Grid.Item>
  )
}
