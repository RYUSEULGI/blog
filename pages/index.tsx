import Layout from '@/components/layouts'
import { RecentPostCardList } from '@/components/pages/home/recent-card-list'

import DefaultText from '@/components/typography/default-text'
import SubTitle from '@/components/typography/sub-title'
import Title from '@/components/typography/title'
import { Post } from '@/interface/post'
import { getRecentPosts } from '@/libs/post'

interface Props {
  posts: Post[]
}

export default function HomePage({ posts }: Props) {
  return (
    <Layout>
      <div className="flex flex-col gap-40">
        <section className="flex flex-col items-start">
          <Title>RYUSEULGI</Title>
          <DefaultText>
            안녕하세요 3년차 프론트엔드 개발자 류슬기입니다. <br />
            어쩌구 저쩌구
          </DefaultText>
          <button>자기 소개 상세보기 -</button>
        </section>
        <section>
          <SubTitle className="mb-9">Recent Posts</SubTitle>
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
  ])

  return {
    props: { posts },
  }
}
