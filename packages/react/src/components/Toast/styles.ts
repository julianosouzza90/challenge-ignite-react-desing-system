import * as ToastRadix from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Root = styled(ToastRadix.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',

  boxSizing: 'border-box',
  maxWidth: '360px',
  background: '$gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
})

export const CloseButton = styled(ToastRadix.Close, {
  all: 'unset',
  position: 'absolute',
  right: 0,
  top: 0,
  marginTop: '$3',
  marginRight: '$3',
  cursor: 'pointer',
  color: '$gray200',
})

export const Title = styled(ToastRadix.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const Description = styled(ToastRadix.Description, {
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})
