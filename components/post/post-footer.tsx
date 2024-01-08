import Link from 'next/link'
import { Avatar } from '../avatar'
import { Label } from '../label'

export function PostFooter({ tags }: { tags: string[] }) {
  return (
    <section>
      <div className="flex items-center gap-2 py-10">
        {tags.map((tag) => (
          <Link
            href={`/tags/${tag.toLocaleLowerCase()}`}
            key={`post-tag-${tag}`}
          >
            <Label>{tag}</Label>
          </Link>
        ))}
      </div>

      <hr className="mb-8" />

      <Avatar />
    </section>
  )
}
