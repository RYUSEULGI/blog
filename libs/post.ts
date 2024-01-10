import { allPosts } from '@/.contentlayer/generated'
import { PostCategory } from '@/interface/post'

export function getArchiveList() {
  return allPosts.filter((post) =>
    post._raw.sourceFilePath.includes('/index.mdx'),
  )
}

export function getArticlePostAll() {
  const posts = allPosts
    .filter(
      (post) =>
        post._raw.sourceFilePath.includes('article') &&
        post._raw.sourceFileName !== 'index.mdx',
    )
    .map((post) => ({
      ...post,
      _raw: {
        ...post._raw,
        sourceFileName: post._raw.sourceFileName.replace('.mdx', ''),
      },
    }))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export function getAlgorithmPostAll() {
  const posts = allPosts
    .filter(
      (post) =>
        post._raw.sourceFilePath.includes('algorithm') &&
        post._raw.sourceFileName !== 'index.mdx',
    )
    .map((post) => ({
      ...post,
      _raw: {
        ...post._raw,
        sourceFileName: post._raw.sourceFileName.replace('.mdx', ''),
      },
    }))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export function getPostBySlug(category: string, slug: string) {
  const posts =
    category === PostCategory.글 ? getArticlePostAll() : getAlgorithmPostAll()

  const post = posts.find((post) => post._raw.sourceFileName === slug)

  const index = posts.findIndex((post) => post._raw.sourceFileName === slug)

  const prevPost = posts[index + 1] ?? null
  const nextPost = posts[index - 1] ?? null

  return { post, prevPost, nextPost }
}
