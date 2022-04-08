import React from 'react'
import Page from './Page'
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    message: 'Hello Interviewer',
    emoji: '👋',
  },
  argTypes: { onClick: { action: 'clicked' } },
}

function Template(args) {
  return <Page {...args} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PageComponent = Template.bind({})
PageComponent.storyName = 'Page'
// PageComponent.play = async ({ canvasElement }) => {
//   // Starts querying the component from its root element
//   const canvas = within(canvasElement)

//   // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
//   await userEvent.click(canvas.getByTestId('card'))
// }
