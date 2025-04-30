import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Icon } from '../src/app/components/Icon'

test('Icon renders', () => {
  render(<Icon id="check" />)
  expect(screen.getByTestId('check')).toBeInTheDocument()
})