import Image from 'next/image'

interface Props {
  src: string
  title: string
}

export function PostCoverImage({ src, title }: Props) {
  return (
    <Image
      src={src}
      alt={`cover-image-${title}`}
      width={500}
      height={300}
      className="shadow-sm w-full"
    />
  )
}
