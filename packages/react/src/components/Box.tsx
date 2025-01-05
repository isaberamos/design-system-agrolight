import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
