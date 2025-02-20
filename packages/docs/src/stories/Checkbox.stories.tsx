import { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@saas-agrolight/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
    decorators: [
        (Story) => {
            return (
                <Box 
                    as="label" 
                    css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    {Story()}
                    <Text size="sm">Aceitar termos de uso</Text>
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
