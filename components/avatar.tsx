import Image from 'next/image'
import { LinkExternal } from './link-external'
import DefaultText from './typography/default-text'

export function Avatar() {
  return (
    <div className="flex items-center">
      <Image
        src="/profile.jpg"
        alt="profile_image"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full mr-4"
      />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold">skeyyy</p>
          <LinkExternal href="https://github.com/RYUSEULGI">
            <Image
              src="/github-icon.svg"
              alt="github-icon"
              width={16}
              height={16}
              className="mt-1"
            />
          </LinkExternal>
        </div>
        <DefaultText className="text-gray-400 dark:text-gray-300">
          꾸준하게 글을 쓰려고 합니다.
        </DefaultText>
      </div>
    </div>
  )
}
