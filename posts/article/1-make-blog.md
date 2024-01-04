---
title: 'Next.js로 블로그 만들기(1)'
description: '미루고 미루던 개발 블로그를 만들어보자 미루고 미루던 개발 블로그를 만들어보자 미루고 미루던 개발 블로그를 만들어보자 미루고 미루던 개발 블로그를 만들어보자'
thumbnail: '/default-image.jpg'
tags:
  - Next.js
  - Blog
date: '2024-01-03'
---

## 시작하며

새해가 시작되면 항상 그렇듯 새로운 목표를 정하게 된다. 2024년을 맞아 기록 및 사이드 프로젝트용으로 꾸준히 개발을 하기 위해 블로그 만들기 목표를 정해보았다. 항상 만들어야지 말만하다가 행동으로 옮기지 못했는데 새해 버프를 받아 꾸준하게 해봐야겠다. 블로그는 유지보수가 쉬워야 하기 때문에 가장 친숙한 React와 간편하고 반응형 구현이 쉬운 tailwind css를 사용하기로 결정했다.

---

## Next.js vs Gatsby

React 기반으로 블로그를 만들려고 했기 때문에 Gatsby 프레임워크를 사용해서 개발하는 방법이 가장 먼저 떠올랐다. 하지만 해서 Next.js를 사용해서 블로그를 개발하기로 선택했다.

## Markdown으로 글 작성하기

vercel의 [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) 레포지토리를 참고하여 Markdown으로 글 작성하고
