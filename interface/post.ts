import { Post } from '@/.contentlayer/generated'

export enum PostCategory {
  글 = 'article',
  알고리즘 = 'algorithm',
}

export interface IPost extends Post {}

export interface IPostDetail {
  post: IPost
  prevPost: IPost | null
  nextPost: IPost | null
}
