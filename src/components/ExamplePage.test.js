import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExamplePage from './ExamplePage'

// Matchers Docs: https://www.npmjs.com/package/@testing-library/jest-dom
// Testing Docs: https://testing-library.com/docs/react-testing-library/api

describe('ExamplePage', function () {
  let mockOnEmojiClick
  beforeEach(function () {
    mockOnEmojiClick = jest.fn()
  })

  describe('with default props', function () {
    it('renders default message', () => {
      render(<ExamplePage />)
      const message = screen.getByText('Hello Interviewer')
      expect(message).toBeInTheDocument()
    })

    it('renders default emoji', () => {
      render(<ExamplePage />)
      const message = screen.getByText('👋')
      expect(message).toBeInTheDocument()
    })

    describe('when provided with onEmojiClick', function () {
      it('calls onClick when emoji is Clicked', async () => {
        render(<ExamplePage onEmojiClick={mockOnEmojiClick} />)
        const user = userEvent.setup()
        const emoji = screen.getByTestId('emoji')

        await user.click(emoji)
        expect(mockOnEmojiClick).toHaveBeenCalledTimes(1)
      })
    })

    it('renders the default emoji with a bounce by default', function () {
      render(<ExamplePage />)
      expect(screen.getByTestId('emoji')).toHaveClass('animate-bounce')
    })

    it('changes the emoji to spin when the emoji is clicked', async () => {
      render(<ExamplePage />)
      const user = userEvent.setup()
      const emoji = screen.getByTestId('emoji')

      await user.click(emoji)
      expect(emoji).toHaveClass('animate-spin')
    })
  })
})
