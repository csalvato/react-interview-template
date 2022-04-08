import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from './Page'

// Matchers Docs: https://www.npmjs.com/package/@testing-library/jest-dom
// Testing Docs: https://testing-library.com/docs/react-testing-library/api

describe('Page', function () {
  let mockOnClick
  beforeEach(function () {
    mockOnClick = jest.fn()
  })

  describe('with default props', function () {
    it('renders default message', () => {
      render(<Page />)
      const message = screen.getByText('Hello Interviewer')
      expect(message).toBeInTheDocument()
    })

    it('renders default emoji', () => {
      render(<Page />)
      const message = screen.getByText('👋')
      expect(message).toBeInTheDocument()
    })

    describe('when provided with onClick', function () {
      it('calls onClick when Clicked', async () => {
        render(<Page onClick={mockOnClick} />)
        const user = userEvent.setup()
        const card = screen.getByTestId('card')

        await user.click(card, { delay: 1000 })
        expect(mockOnClick).toHaveBeenCalledTimes(1)
      })
    })
  })
})
