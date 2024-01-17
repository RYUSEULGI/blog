import { baseUrl } from '@/libs/utils'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/posts/sitemap.xml`,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
