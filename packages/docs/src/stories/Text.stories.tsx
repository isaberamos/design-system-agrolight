import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@saas-agrolight/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta numquam quisquam sint quasi sapiente voluptates, ex facilis saepe dolorem debitis distinctio. Harum dolor iusto odit ipsam consequatur recusandae eum."
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
        ],
      control: {
          type: 'inline-radio',
      }
  }
},
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}