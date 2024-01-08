import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

import { Suspense } from 'react'

const options: {
  mdxOptions: {
    remarkPlugins: any[]
    rehypePlugins: any[]
  }
} = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
}

export function PostBody({ content }: { content: string }) {
  return (
    <section>
      <Suspense fallback={<>Loading...</>}>
        <div className="mx-auto lg:max-w-4xl prose dark:prose-invert">
          <MDXRemote source={content} options={options} />
        </div>
      </Suspense>
    </section>
  )
}
