import Title from '../typography/title'

interface Props {
  title: string
  date: string
}

export function PostHeader({ title, date }: Props) {
  return (
    <section className="max-w-2xl mx-auto lg:max-w-4xl pt-0.5">
      <Title>{title}</Title>
      <div className="mb-6 text-lg">{date}</div>
    </section>
  )
}
