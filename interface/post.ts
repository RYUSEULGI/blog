import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export enum PostCategory {
  전체 = 'all',
  글 = 'article',
  알고리즘 = 'algorithm',
}

export interface Post {
  slug: string
  title: string
  description: string
  thumbnail: string
  date: string
  tags: string[]
  content: MDXRemoteSerializeResult
}
