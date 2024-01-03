import { Card } from '@/components/card'
import Grid from '@/components/layouts/grid'
import { Post } from '@/interface/post'

interface Props {
  posts: Post[]
}

export function RecentPostCardList({ posts }: Props) {
  return (
    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {posts.map((post) => (
        <PostCardListItem key={`post-card-${post.slug}`} post={post} />
      ))}
    </Grid>
  )
}

function PostCardListItem({ post }: { post: Post }) {
  return (
    <Grid.Item>
      <Card
        href={`/posts/${post.slug}`}
        title={post.title}
        description={post.description}
        thumbnail={post.thumbnail}
      />
    </Grid.Item>
  )
}
