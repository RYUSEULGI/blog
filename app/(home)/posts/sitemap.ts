import { getPostAll } from '@/libs/post'
import { baseUrl } from '@/libs/utils'

import { MetadataRoute } from 'next'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  const posts = getPostAll().map((post) => ({
    url: `${baseUrl}/posts/${post.category}/${post._raw.sourceFileName}`,
    lastModified: new Date(post.date).toISOString(),
  }))

  let fetchedRoutes: Route[] = []

  try {
    fetchedRoutes = (await Promise.all([posts])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }

  return [...routesMap, ...fetchedRoutes]
}
