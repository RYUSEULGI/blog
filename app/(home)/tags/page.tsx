import { Label } from '@/components/label'
import Title from '@/components/typography/title'
import { getTags } from '@/libs/post'
import Link from 'next/link'

export default function TagsPage() {
  const tags = getTags()

  return (
    <div className="flex flex-col items-start">
      <Title>Tags</Title>
      <div className="mt-4 flex items-center gap-3 flex-wrap">
        {tags.map(
          (tag) =>
            tag && (
              <Link href={`/tags/${tag}`}>
                <Label key={`${tag}-tag`}>{tag}</Label>
              </Link>
            ),
        )}
      </div>
    </div>
  )
}
