'use client'

export function Comments() {
  return (
    <section
      style={{ width: '100%' }}
      ref={(element) => {
        if (!element) {
          return
        }

        const scriptElement = document.createElement('script')

        scriptElement.src = 'https://utteranc.es/client.js'
        scriptElement.async = true
        scriptElement.crossOrigin = 'anonymous'

        scriptElement.setAttribute('repo', 'RYUSEULGL/blog')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute('theme', 'github-light')

        element.replaceChildren(scriptElement)
      }}
    />
  )
}
