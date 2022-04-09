import React from 'react'
import { expect } from '@storybook/jest'
import ExamplePage from './ExamplePage'
import { within, userEvent, waitFor } from '@storybook/testing-library'

export default {
  title: 'Example/ExamplePage',
  component: ExamplePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    message: 'Hello',
    emoji: '👋',
    hasFeeling: false,
  },
  argTypes: { onEmojiClick: { action: 'clicked' } },
}

function Template(args) {
  return <ExamplePage {...args} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const PageComponent = Template.bind({})
PageComponent.storyName = 'ExamplePage'
PageComponent.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  const name = 'Interviewer'

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.type(canvas.getByTestId('name-input'), name, {
    delay: 100,
  })
  expect(canvas.getByTestId('card')).toHaveTextContent(name)

  expect(canvas.getByTestId('emoji')).toHaveClass('animate-bounce')
  await userEvent.click(canvas.getByTestId('emoji'))
  expect(canvas.getByTestId('emoji')).toHaveClass('animate-spin')
  await waitFor(() => {
    expect(args.onEmojiClick).toHaveBeenCalledTimes(1)
  })
  await userEvent.click(canvas.getByTestId('emoji'))
}
