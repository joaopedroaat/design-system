import { ToolTip, ToolTipProps } from '@joaopedroaat-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Challenge/ToolTip',
  component: ToolTip,
  args: {
    date: new Date().toDateString(),
    available: true,
  },
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}
