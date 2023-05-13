import * as TooltipRadix from '@radix-ui/react-tooltip'
import { Arrow, Content } from './styles'
import { ComponentProps, ReactNode } from 'react'

export type TooltipProps = ComponentProps<typeof TooltipRadix.Root> & {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <Content>
            {content}
            <Arrow />
          </Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
