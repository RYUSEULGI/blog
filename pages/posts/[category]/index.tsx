import Layout from '@/components/layouts'
import { PostList } from '@/components/pages/posts/post-list'
import { TabList } from '@/components/tab/tab-list'
import Title from '@/components/typography/title'

import { Post, PostCategory } from '@/interface/post'
import { getAlgorithmPosts, getAllPosts, getArticlePosts } from '@/libs/post'
import { useRouter } from 'next/router'

interface Props {
  posts: Post[]
}

interface Params {
  params: { category: string }
}

export default function PostTypePage({ posts }: Props) {
  const router = useRouter()
  const category = router.query?.category?.toString() ?? PostCategory.전체

  return (
    <Layout>
      <div className="flex flex-col items-start">
        <Title>Posts</Title>
        <div className="mb-4">
          <TabList
            value={category}
            items={[
              { name: '전체', value: PostCategory.전체 },
              { name: '글', value: PostCategory.글 },
              { name: '알고리즘', value: PostCategory.알고리즘 },
            ]}
            onClick={(type) => router.push(`/posts/${type}`)}
          />
        </div>
        <PostList category={category} posts={posts} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: Params) {
  let posts: any = []

  const fields = ['slug', 'thumbnail', 'title', 'date', 'tags', 'description']

  if (params.category === PostCategory.글) {
    posts = getArticlePosts(fields)
  } else if (params.category === PostCategory.알고리즘) {
    posts = getAlgorithmPosts(fields)
  } else {
    posts = getAllPosts(fields)
  }

  return {
    props: {
      posts,
    },
  }
}

export async function getStaticPaths() {
  const paths = [PostCategory.전체, PostCategory.글, PostCategory.알고리즘]

  return {
    paths: paths.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  }
}
