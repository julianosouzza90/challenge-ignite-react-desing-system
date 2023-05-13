import * as TooltipRadix from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const Content = styled(TooltipRadix.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
})

export const Arrow = styled(TooltipRadix.Arrow, {
  fill: '$gray900',
})
