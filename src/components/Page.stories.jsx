import React from 'react'
import { expect } from '@storybook/jest'
import Page from './Page'
import { within, userEvent, waitFor } from '@storybook/testing-library'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {},
}

function Template(args) {
  return <Page {...args} />
}

export const PageComponent = Template.bind({})
PageComponent.storyName = 'Page'
// PageComponent.play = async ({ args, canvasElement }) => {
// }
