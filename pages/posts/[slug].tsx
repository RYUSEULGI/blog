import Layout from '@/components/layouts'
import { PostContainer } from '@/components/post'
import Title from '@/components/typography/title'

import { Post } from '@/interface/post'
import markdownToHtml from '@/libs/markdownToHtml'
import { getAllPosts, getPostBySlug } from '@/libs/post'
import { useRouter } from 'next/router'

type Props = {
  post: Post
}

type Params = {
  params: {
    slug: string
  }
}

export default function PostDetailPage({ post }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <>error</>
  }

  return (
    <Layout>
      {router.isFallback ? (
        <Title>Loading…</Title>
      ) : (
        <PostContainer post={post} />
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'thumbnail',
    'slug',
    'date',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
