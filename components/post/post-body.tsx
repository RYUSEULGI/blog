import markdownStyles from '@/styles/markdown-styles.module.css'

export function PostBody({ content }: { content: string }) {
  return (
    <div className="max-w-2xl mx-auto lg:max-w-4xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
