/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getUserInfo } from '../../apiClient'
import { userInfo } from '../../../test/fakeData'
import { useAuth0 } from '@auth0/auth0-react'

import Nav from '../Nav'

jest.mock('react-redux')
jest.mock('../../apiClient')
jest.mock('@auth0/auth0-react')

beforeEach(() => {})

describe('<Nav />', () => {
  describe('when user is signed in', () => {
    beforeEach(async () => {
      useAuth0.mockReturnValue({
        isAuthenticated: true,
      })
      useSelector.mockReturnValue(userInfo)
      getUserInfo.mockReturnValue(Promise.resolve(userInfo))
      render(<Nav />, { wrapper: MemoryRouter })
      await screen.findByText(/Earnings: 84/i)
    })

    test('nav bar is rendered', async () => {
      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    test('logo is displayed', async () => {
      expect(screen.getByAltText('the logo')).toBeInTheDocument()
    })
    test('links are displayed', () => {
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /log off/i })).toBeInTheDocument()
    })
  })
  describe('when user is not signed in', () => {
    beforeEach(async () => {
      useAuth0.mockReturnValue({
        isAuthenticated: false,
      })
      useSelector.mockReturnValue({
        auth0Id: '',
      })
      render(<Nav />, { wrapper: MemoryRouter })
    })

    test.todo('nav bar is rendered')

    test.todo('logo is displayed')
    test('links are displayed', () => {
      expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    })
  })
})
