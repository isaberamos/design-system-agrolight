import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  width: 348,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$16',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray600',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',
        '&:not(:disabled):hover': {
          background: '$green400',
          color: '$white',
        },
        '&:disabled': {
          background: '$green300',
          color: '$white',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$green300',
        '&:not(:disabled):hover': {
          background: '$green200',
          color: '$white',
        },
        '&:disabled': {
          color: '$green200',
        },
      },
      tertiary: {
        color: '$white',
        backgroundColor: '$green300',
        '&:not(:disabled):hover': {
          background: '$green200',
          color: '$white',
        },
        '&:disabled': {
          color: '$green200',
        },
      },
    },
    size: {
      sm: {
        height: 40,
        width: 150
      },
      md: {
        height: 50,
        width: 348
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
