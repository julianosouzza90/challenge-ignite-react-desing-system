import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { CloseButton, Description, Root, Title } from './styles'
import { ComponentProps } from 'react'

export type ToastProps = ComponentProps<typeof ToastRadix.Root> & {
  title: string
  description: string
}
export function Toast({ title, description, children, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <Root duration={100000}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ToastRadix.Action altText="" />
        <CloseButton>
          <X />
        </CloseButton>
      </Root>
      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}
