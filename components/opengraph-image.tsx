import { ImageResponse } from 'next/og'

export type Props = {
  title?: string
}

export default async function OpenGraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: 'skeyyy 개발 블로그',
    },
    ...props,
  }

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <div className="w-12 h-12">🟠</div>
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
