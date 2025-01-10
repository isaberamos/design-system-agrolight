import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@saas-agrolight/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Criar conta',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
        options: ['primary', 'secondary', 'tertiary'],
        control: {
            type: 'inline-radio',
        }
    },
    size: {
        options: ['sm', 'md'],
        control: {
            type: 'inline-radio',
        }
    },
    disabled: {
        control: {
            type: 'boolean',
        }
    },
    onClick: {
        action: 'click',
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Adicionar usuário',
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Atualizar',
        size: 'sm',
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
            Proximo passo
            <ArrowRight weight="bold" />
            </>
        )
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    }
}