import { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@saas-agrolight/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size="sm">Email adress</Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Insira o nome',
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'seu-usuario',
    }
}