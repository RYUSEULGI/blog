import Image from 'next/image'

import { Suspense } from 'react'

import { useMDXComponent } from 'next-contentlayer/hooks'
import '../../styles/md.css'

export function PostBody({ content }: { content: string }) {
  const MDXContent = useMDXComponent(content)

  return (
    <section>
      <Suspense fallback={<>Loading...</>}>
        <div className="mx-auto lg:max-w-4xl prose dark:prose-invert">
          <MDXContent
            components={{
              img: (props) => (
                <Image
                  src={props.src || ''}
                  alt={props.alt || 'image'}
                  className="w-full flex items-center justify-center"
                />
              ),
            }}
          />
        </div>
      </Suspense>
    </section>
  )
}
