import clsx from 'clsx'
import { ComponentProps } from 'react'

function Grid({ className, children, ...props }: ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row gap-4', className)}>
      {children}
    </ul>
  )
}

function GridItem({ className, children, ...props }: ComponentProps<'li'>) {
  return (
    <li
      {...props}
      className={clsx('aspect-square transition-opacity', className)}
    >
      {children}
    </li>
  )
}

Grid.Item = GridItem

export default Grid
