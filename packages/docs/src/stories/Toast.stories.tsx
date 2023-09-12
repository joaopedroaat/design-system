import { Toast, ToastProps } from '@joaopedroaat-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Challenge/Toast',
  component: Toast,
  args: {
    title: 'Agendamento Realizado',
    description: new Date().toDateString(),
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
