import Title from '../typography/title'

interface Props {
  title: string
  date: string
}

export function PostHeader({ title, date }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <Title>{title}</Title>
      <div className="mb-6 text-lg">{date}</div>
    </div>
  )
}
