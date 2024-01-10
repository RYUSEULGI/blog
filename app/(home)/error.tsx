'use client'

export default function PostError({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
      <h2 className="text-xl font-bold">Oops!</h2>
      <p className="my-2">에러가 발생했습니다.</p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-orange-400 p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}
      >
        다시 시도하기
      </button>
    </div>
  )
}
