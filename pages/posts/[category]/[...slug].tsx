import Layout from '@/components/layouts'
import { PostContainer } from '@/components/post'
import SubTitle from '@/components/typography/sub-title'
import Title from '@/components/typography/title'
import { Post, PostCategory } from '@/interface/post'
import markdownToHtml from '@/libs/markdownToHtml'
import {
  algorithmDir,
  articleDir,
  getAllPosts,
  getPostBySlug,
} from '@/libs/post'
import { useRouter } from 'next/router'

interface Params {
  params: { category: string; slug: string[] }
}

export default function PostDetailPage({ post }: { post: Post | null }) {
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
  const { category, slug } = params

  const fields = [
    'title',
    'description',
    'thumbnail',
    'slug',
    'date',
    'content',
  ]
  let post = null

  if (category === PostCategory.전체) {
    const posts = getAllPosts(fields)
    post = posts.find((post) => post.slug === slug.join('')) || null
  } else {
    const dir = category === PostCategory.글 ? articleDir : algorithmDir
    post = getPostBySlug(slug.join(''), fields, dir)
  }

  const content = await markdownToHtml(post?.content || '')

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
  const categories = [
    PostCategory.전체,
    PostCategory.글,
    PostCategory.알고리즘,
  ] as string[]
  const posts = getAllPosts(['slug'])

  const paths = categories.flatMap((category) =>
    posts.map((post) => ({ params: { category, slug: [post.slug] } })),
  )

  return {
    paths,
    fallback: false,
  }
}
