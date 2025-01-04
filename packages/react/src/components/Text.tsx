import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray600',

  variants: {
    size: {
      xxs: { fontsize: '$xxs' },
      xs: { fontsize: '$xs' },
      sm: { fontsize: '$sm' },
      md: { fontsize: '$md' },
      lg: { fontsize: '$lg' },
      xl: { fontsize: '$xl' },
      '2xl': { fontsize: '2xl' },
      '4xl': { fontsize: '4xl' },
      '5xl': { fontsize: '$xl' },
      '6xl': { fontsize: '6xl' },
      '7xl': { fontsize: '7xl' },
      '8xl': { fontsize: '$xl' },
      '9xl': { fontsize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {}

Text.displayName = 'Text'
