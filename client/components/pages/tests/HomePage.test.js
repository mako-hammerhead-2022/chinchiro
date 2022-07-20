/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import HomePage from '../HomePage'

import { cacheUser } from '../../../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('../../../auth0-utils')
jest.mock('@auth0/auth0-react')

describe('<HomePage/>', () => {
  it('renders a descriptive heading', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    cacheUser.mockReturnValue(true)

    render(
      <Router location={history.location} navigator={history}>
        <HomePage />
      </Router>
    )

    const startButton = screen.getByRole('link', { name: 'START GAME' })
    expect(startButton).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')
  })
})