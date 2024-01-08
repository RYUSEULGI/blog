'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string
  items: { name: string; value: string }[]
}

export function TabList({ value, items }: Props) {
  const router = useRouter()

  const tabRef = useRef<HTMLUListElement>(null)

  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeTabWidth, setActiveTabWidth] = useState(0)
  const [tabTransform, setTabTransform] = useState(0)

  useEffect(() => {
    if (!tabRef.current) {
      return
    }

    const children = tabRef.current.children
    const tabWidths = Array.from(children).map((child) => child.clientWidth)
    const index =
      activeTabIndex || items.findIndex((item) => item.value === value)

    const activeTabWidth = tabWidths[index]
    const transform = tabWidths
      .slice(0, index)
      .reduce((acc, width) => acc + width, 0)

    setActiveTabWidth(activeTabWidth)
    setTabTransform(transform)
  }, [activeTabIndex, items, value])

  const handleClick = (value: string, index: number) => {
    router.push(`/posts?category=${value}`)
    setActiveTabIndex(index)
  }

  return (
    <div className="relative w-full overflow-visible">
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-black rounded transition-transform transition-width duration-200 ease-in-out dark:bg-white"
        style={{
          width: `${activeTabWidth}px`,
          transform: `translateX(${tabTransform}px) translateZ(0px)`,
        }}
      />

      <ul ref={tabRef} className="flex">
        {items.map((item, index: number) => (
          <li
            key={`tab-${item.value}`}
            onClick={() => handleClick(item.value, index)}
            className="relative px-3 py-2 h-14 box-border flex justify-center flex-wrap cursor-pointer whitespace-nowrap"
          >
            <h5
              className={clsx(
                'm-0 flex items-center justify-center text-base text-neutral-400 font-medium transition-all duration-200 ease-in-out',
                value === item.value &&
                  'text-neutral-900 font-bold dark:text-white',
              )}
            >
              {item.name}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  )
}
