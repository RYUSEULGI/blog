import { PostList } from '@/components/pages/posts/post-list'
import { TabList } from '@/components/tab/tab-list'
import Title from '@/components/typography/title'
import {
  Items,
  getAlgorithmPosts,
  getAllPosts,
  getArticlePosts,
} from '@/libs/post'

import { Post, PostCategory } from '@/interface/post'

interface Props {
  posts: Post[]
}

interface Props {
  searchParams?: { [key: string]: string | undefined }
}

export default function PostTypePage({ searchParams }: Props) {
  const { category: categoryParam } = searchParams as {
    [key: string]: string | undefined
  }
  const category = categoryParam || PostCategory.전체

  let posts: Items[] = []
  const fields = ['slug', 'thumbnail', 'title', 'date', 'tags', 'description']

  if (category === PostCategory.글) {
    posts = getArticlePosts(fields)
  } else if (category === PostCategory.알고리즘) {
    posts = getAlgorithmPosts(fields)
  } else {
    posts = getAllPosts(fields)
  }

  return (
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
        />
      </div>
      <PostList posts={(posts as unknown) as Post[]} />
    </div>
  )
}
