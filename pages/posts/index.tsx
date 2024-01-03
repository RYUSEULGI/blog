import Layout from '@/components/layouts'
import Title from '@/components/typography/title'

import { Post } from '@/interface/post'
import { getAllPosts } from '@/libs/post'

interface Props {
  posts: Post[]
}

export default function PostPage({ posts }: Props) {
  return (
    <Layout>
      <div className="flex flex-col items-start">
        <Title>Posts</Title>
      </div>
    </Layout>
  )
}

export const getStaticProps = () => {
  const posts = getAllPosts(['slug', 'title', 'preview', 'date'])
  return { props: { posts } }
}
