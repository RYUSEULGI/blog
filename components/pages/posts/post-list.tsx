'use client'

import DefaultText from '@/components/typography/default-text'
import SubTitle from '@/components/typography/sub-title'
import { useHover } from '@/hooks/use-hover'
import { IPost } from '@/interface/post'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  posts: IPost[]
}

export function PostList({ posts }: Props) {
  return (
    <AnimatePresence>
      {posts.map((post, index: number) => (
        <motion.div
          key={`post-list-item-${post._id}-${index}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-full"
        >
          <PostListItem post={post} />
        </motion.div>
      ))}
    </AnimatePresence>
  )
}

function PostListItem({ post }: { post: IPost }) {
  const { isHover, ref, ...props } = useHover()

  return (
    <Link href={`/posts/${post.category}/${post._raw.sourceFileName}`}>
      <div
        {...props}
        className="w-full flex flex-col items-start gap-5 py-10 border-b border-b-gray-100 cursor-pointer sm:items-center sm:flex-row sm:gap-10 lg:gap-20"
      >
        <div className="w-full">
          <SubTitle
            className={clsx('mb-3 sm:mb-6', isHover && 'text-orange-400')}
          >
            {post.title}
          </SubTitle>
          <DefaultText className="mb-2 line-clamp-2 text-neutral-500 dark:text-gray-300">
            {post.description}
          </DefaultText>
          <p className="text-sm text-neutral-500 dark:text-gray-300">
            {post.date}
          </p>
        </div>
      </div>
    </Link>
  )
}
