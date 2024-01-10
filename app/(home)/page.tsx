import { InfoBox } from '@/components/pages/home/info-box'
import { PostList } from '@/components/pages/posts/post-list'
import { TabList } from '@/components/tab/tab-list'
import Title from '@/components/typography/title'
import { PostCategory } from '@/interface/post'
import { getAlgorithmPostAll, getArticlePostAll } from '@/libs/post'

interface Props {
  searchParams?: { [key: string]: string | undefined }
}

export default function HomePage({ searchParams }: Props) {
  const { category: categoryParam } = searchParams as {
    [key: string]: string | undefined
  }
  const category = categoryParam || PostCategory.글

  const posts =
    category === PostCategory.글 ? getArticlePostAll() : getAlgorithmPostAll()

  return (
    <div className="flex flex-col">
      <InfoBox />
      <Title>Posts</Title>
      <div className="mb-4">
        <TabList
          value={category}
          items={[
            { name: '글', value: PostCategory.글 },
            { name: '알고리즘', value: PostCategory.알고리즘 },
          ]}
        />
      </div>
      <PostList category={category} posts={posts} />
    </div>
  )
}
