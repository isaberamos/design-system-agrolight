import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@saas-agrolight/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/isaberamos.png',
    alt: 'Isabella Ramos',
  },
  argTypes: {
    scr: {
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}