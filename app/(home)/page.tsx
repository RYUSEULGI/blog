import { TextButton } from '@/components/button/text-button'
import { InfoBox } from '@/components/pages/home/info-box'
import { PostCardList } from '@/components/pages/home/post-card-list'
import SubTitle from '@/components/typography/sub-title'
import { Post } from '@/interface/post'
import { getRecentPosts } from '@/libs/post'
import Link from 'next/link'

export default function HomePage() {
  const posts = getRecentPosts([
    'title',
    'description',
    'slug',
    'tags',
    'thumbnail',
  ])

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col items-start">
        <InfoBox />
      </section>
      <section>
        <div className="flex items-center justify-between">
          <SubTitle className="mb-9">Recent Posts</SubTitle>
          <Link href="/posts">
            <TextButton>전체보기</TextButton>
          </Link>
        </div>
        <PostCardList posts={(posts as unknown) as Post[]} />
      </section>
    </div>
  )
}
