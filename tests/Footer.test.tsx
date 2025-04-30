import { expect, test, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'

import { Footer } from '../src/app/pages/marketing/components/Footer'

test('Footer renders', () => {
  render(<Footer />)

  // mock the current year
  const currentYear = new Date().getFullYear()

  expect(screen.getByTestId('current-year')).toHaveTextContent(currentYear.toString())

  // clear current year mock
  vi.clearAllMocks()
})