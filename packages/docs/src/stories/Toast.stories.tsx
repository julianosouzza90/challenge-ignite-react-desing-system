import { Box, Toast, ToastProps } from '@jsouzza/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display / Toast',
  component: Toast,
  args: {
    title: 'I am a Toast!',
    description: "And that's my description",
  },
  decorators: [
    (story) => {
      return <Box>{story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
