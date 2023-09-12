import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  width: '22.5rem',

  background: '$gray600',
  padding: '$3 $5',

  display: 'grid',
  gridTemplateAreas: `'title close' 'description description'`,
  gridRowGap: '0.5rem',

  border: '1px solid $gray600',
  borderRadius: '$sm',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  gridArea: 'title',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  gridArea: 'description',
})

export const ToastClose = styled(Toast.Close, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  color: '$gray200',
  fontSize: '$xl',
  cursor: 'pointer',
  gridArea: 'close',
  justifySelf: 'end',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$2',
})
