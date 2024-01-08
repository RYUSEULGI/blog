import { Label } from '@/components/label'
import Layout from '@/components/layouts'
import Title from '@/components/typography/title'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export default function TagsPage() {
  const router = useRouter()
  const { category, slug } = router.query

  return (
    <Layout>
      <div className="flex flex-col items-start">
        <Title>Tags</Title>

        <div className="flex items-center gap-3 flex-wrap">
          {[...Array(100)].fill(0).map((v) => (
            <Label>{v}</Label>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: allBlogPosts.map((post) => post.slug),
//     fallback: 'blocking',
//   }
// }
