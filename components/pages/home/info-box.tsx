import { Avatar } from '@/components/avatar'
import { LinkExternal } from '@/components/link-external'
import DefaultText from '@/components/typography/default-text'
import Image from 'next/image'

export function InfoBox() {
  return (
    <section className="mt-6 mb-4 w-full flex items-center justify-center flex-col">
      <Image
        src="/profile.jpg"
        alt="profile_image"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full mr-4"
      />
      <div className="mt-2 flex items-center gap-2">
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
    </section>
  )
}
