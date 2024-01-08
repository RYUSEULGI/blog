'use client'

import DefaultText from '@/components/typography/default-text'
import SubTitle from '@/components/typography/sub-title'
import { useHover } from '@/hooks/use-hover'
import { Post } from '@/interface/post'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  posts: Post[]
}

export function PostList({ posts }: Props) {
  return (
    <AnimatePresence>
      {posts.map((post, index: number) => (
        <motion.div
          key={`post-list-item-${post.slug}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Link href={`/posts/${post.slug}`}>
            <PostListItem post={post} />
          </Link>
        </motion.div>
      ))}
    </AnimatePresence>
  )
}

function PostListItem({ post }: { post: Post }) {
  const { isHover, ref, ...props } = useHover()

  return (
    <div
      {...props}
      className="w-full flex flex-col items-start gap-5 py-10 cursor-pointer sm:items-center sm:flex-row sm:gap-10 lg:gap-20"
    >
      <div ref={ref}>
        <Image
          src={post.thumbnail}
          alt="post-thumbnail"
          width={300}
          height={200}
          className={clsx('rounded-lg', isHover && 'shadow-lg')}
        />
      </div>
      <div className="w-full sm:w-[360px]">
        <SubTitle
          className={clsx('mb-3 sm:mb-8', isHover && 'text-orange-400')}
        >
          {post.title}
        </SubTitle>
        <DefaultText className="mb-2 line-clamp-2 text-neutral-500">
          {post.description}
        </DefaultText>
        <p className="text-sm text-neutral-500">{post.date}</p>
      </div>
    </div>
  )
}
