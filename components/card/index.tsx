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
  return (
    <Link href={href}>
      <div>
        <Image
          src={thumbnail}
          width={400}
          height={300}
          alt="post_thumbnail"
          className="mb-3 rounded-lg"
        />
        <BodyText className="mb-3 truncate">{title}</BodyText>
        <DefaultText className="line-clamp-2">{description}</DefaultText>
      </div>
    </Link>
  )
}
