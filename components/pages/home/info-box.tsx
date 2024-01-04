import { TextButton } from '@/components/button/text-button'
import { LinkExternal } from '@/components/link-external'
import DefaultText from '@/components/typography/default-text'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export function InfoBox() {
  return (
    <>
      <DefaultText className="mb-2">
        안녕하세요 3년차 프론트엔드 개발자 류슬기입니다. <br />
        저는 개발을 하면서 단순히 기능 구현에만 집중하는 것이 아니라 <br /> 웹
        환경을 이해하면서 생산성 있게 개발하는 것을 추구합니다. <br /> 이를 위해
        지속적인 학습을 진행하며 깊이있는 프론트엔드 개발자로 성장하려고
        노력하고 있습니다.
      </DefaultText>
      <LinkExternal
        href="https://ryuseulgi.notion.site/ryuseulgi/_-34add4b35d294ec2a2b76307bb3722e4"
        target="_blank"
      >
        <TextButton className="flex items-center gap-1">
          More about me
          <ArrowLongRightIcon className="w-4 h-4" />
        </TextButton>
      </LinkExternal>
    </>
  )
}
