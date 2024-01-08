---
title: 'Next.js로 블로그 만들기(1)'
description: '미루고 미루던 개발 블로그를 만들어보자'
thumbnail: '/default-image.jpg'
tags:
  - Next.js
  - Blog
  - highlight
date: '2024-01-08'
---

## 시작하며

새해가 시작되면 항상 그렇듯 새로운 목표를 정하게 된다. 2024년을 맞아 기록 및 애정을 담아 개발할 수 있는 프로덕트를 만들면서 꾸준히 개발하기 위해 블로그 만들기 목표를 정해보았다. 항상 만들어야지 말만 하다가 행동으로 옮기지 못했는데 새해라는 좋은 동기부여가 있으니 꾸준하게 해봐야겠다. 블로그는 유지 보수가 쉬워야 하기 때문에 가장 친숙한 React와 간편하고 반응형 구현이 쉬운 tailwind css를 사용하기로 결정했다.

---

## Next.js vs Gatsby

React 기반으로 블로그를 만들려고 했기 때문에 Gatsby 프레임워크를 사용해서 개발하는 방법이 가장 먼저 떠올랐다. 단순 정적 사이트이기 때문에 Gatsby를 사용할까 했지만 SEO Next.js와 좀더 친해지고자 Next.js를 사용해서 블로그를 개발하기로 선택했다.

## 기능 도출

- 글 작성
- 다크 모드
- 댓글
- 이미지 업로드

  이 정도 까지면 블로그의 모양새는 갖출 것 같다. 그런데 여기에 추가로 `맞춤법 검사`를 할 수 있는 기능도 추가해볼까 생각중이다. 글 작성 시 vscode 익스텐션으로 맞춤법 검사가 가능하지만 뭔가 나만의 방식으로 개발을 해보고 싶다. 아직 정확히 어떻게 해야 할지 감은 잡히지 않지만 재밌을 것 같다.

## 마크다운으로 글 작성하기

> vercel의 [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) 레포지토리와 [공식문서](https://nextjs.org/docs/app/building-your-application/configuring/mdx)를 참고하여 마크다운으로 글 작성하는 법을 추가했다.

```typescript
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const dir = join(process.cwd(), 'posts/article')
const fullPath = join(dir, `${realSlug}.md`)
const fileContents = fs.readFileSync(fullPath, 'utf8')
const { data, content } = matter(fileContents)
```

파일 경로의 md 파일을 가지고 와서 md 파일을 파싱 하는 방법을 통해 작성된 데이터를 얻을 수 있다. 이때 [gray-matter](https://www.npmjs.com/package/gray-matter) 라이브러리를 사용하는데 md 파일의 메타데이터를 쉽게 파싱 할 수 있게 도와준다.

```json
// md 상단
---
title: Hello
slug: home
---

<h1>Hello world!</h1>

// 결과
{
  "content": "<h1>Hello world!</h1>",
  "data": {
    "title": "Hello",
    "slug": "home"
  }
}
```

예를 들어 md 파일의 최상단에 다음과 같이 작성해 주면 json 형태의 결과값을 얻을 수 있다. 이를 응용하여 md으로 작성한 글을 가지고 올 수 있게 된다. nextj3 공식문서를 보면 [md](https://nextjs.org/docs/app/building-your-application/configuring/mdx) 관련하여 글이 있길래 해당부분을 적용해보기로 했다.

vercel의 blog-starter를 따라하며 블로그를 만들고 있었는데 코드블럭의 경우 다음과 같이 스타일이 모두 적용되지 않은채 보여 가독성이 많이 떨어지는 것을 확인 할 수 있었다. 다른 태그 요소들 처럼 css 스타일을 적용해 주는 대신에 라이브러리를 사용해서 하이라이터를 적용해주었다.

//https://github.com/PrismJS/prism-themes/tree/master/themes

```typescript
// 하이라이터 적용 코드 작성하기
```
