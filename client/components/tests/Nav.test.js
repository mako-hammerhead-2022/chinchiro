/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useDispatch, Provider } from 'react-redux'

jest.mock('react-redux')
jest.mock('../../actions')

import Nav from '../Nav'

beforeAll(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})
afterAll(() => {
  console.error.mockRestore()
  jest.restoreAllMocks()
})

describe('<Nav />', () => {
  it('renders a descriptive heading', () => {
    const fakeDispatch = jest.fn()
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Nav />)
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
  test.todo('user information is displayed')
})
