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

  describe('with default props', function () {})
})
