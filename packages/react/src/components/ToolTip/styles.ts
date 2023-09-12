import { styled } from '../../styles'

export const ToolTipContainer = styled('div', {
  display: 'inline-block',
  background: '$gray900',
  color: '$white',
  p: {
    fontSize: '$sm',
  },
  padding: '$3 $4',
  borderRadius: '$xs',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    display: 'block',
    width: 0,
    zIndex: '1',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent',
    borderWidth: '9px 9px 0',
    bottom: '-9px',
    left: '50%',
    marginLeft: '-9px',
  },
})
