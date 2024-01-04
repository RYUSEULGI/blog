import { TextButton } from '@/components/button/text-button'
import Layout from '@/components/layouts'
import { RecentPostCardList } from '@/components/pages/home/recent-card-list'

import { InfoBox } from '@/components/pages/home/info-box'
import SubTitle from '@/components/typography/sub-title'
import Title from '@/components/typography/title'
import { Post } from '@/interface/post'
import { getRecentPosts } from '@/libs/post'
import { useRouter } from 'next/navigation'

interface Props {
  posts: Post[]
}

export default function HomePage({ posts }: Props) {
  const router = useRouter()

  return (
    <Layout>
      <div className="flex flex-col gap-16">
        <section className="flex flex-col items-start">
          <Title>RYUSEULGI</Title>
          <InfoBox />
        </section>
        <section>
          <div className="flex items-center justify-between">
            <SubTitle className="mb-9">Recent Posts</SubTitle>
            <TextButton onClick={() => router.push('/posts/all')}>
              전체보기
            </TextButton>
          </div>
          <RecentPostCardList posts={posts} />
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = getRecentPosts([
    'title',
    'date',
    'slug',
    'thumbnail',
    'description',
    'tags',
  ])

  return {
    props: { posts },
  }
}
