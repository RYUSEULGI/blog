import { useHover } from '@/hooks/use-hover'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import BodyText from '../typography/body-text'
import DefaultText from '../typography/default-text'

interface Props {
  href: string
  thumbnail: string
  title: string
  description: string
}

export function Card({ href, thumbnail, title, description }: Props) {
  const { isHover, ref, ...props } = useHover()

  return (
    <Link href={href}>
      <div {...props}>
        <div ref={ref}>
          <Image
            src={thumbnail}
            width={400}
            height={300}
            alt="post_thumbnail"
            className={clsx('mb-3 rounded-lg', isHover && 'shadow-lg')}
          />
        </div>
        <BodyText
          className={clsx('mb-3 truncate', isHover && 'text-orange-400')}
        >
          {title}
        </BodyText>
        <DefaultText className="line-clamp-2">{description}</DefaultText>
      </div>
    </Link>
  )
}
