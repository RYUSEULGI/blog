import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

type Items = {
  [key: string]: string
}

export const articleDir = join(process.cwd(), 'posts/article')
export const algorithmDir = join(process.cwd(), 'posts/algorithm')

export function getSlugs(dir: string) {
  return fs.readdirSync(dir)
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  dir: string,
) {
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const posts = getArticlePosts(fields)
  const algorithmPosts = getAlgorithmPosts(fields)

  const data = posts
    .concat(algorithmPosts)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return data
}

export function getArticlePosts(fields: string[] = []) {
  const slugs = getSlugs(articleDir)

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, articleDir))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAlgorithmPosts(fields: string[] = []) {
  const slugs = getSlugs(algorithmDir)

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, algorithmDir))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getRecentPosts(fields: string[] = []) {
  return getAllPosts(fields).slice(0, 4)
}
