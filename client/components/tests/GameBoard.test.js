/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch } from 'react-redux'
import { arrUsers } from '../../../test/fakeData'

import GameBoard from '../GameBoard'

jest.mock('react-redux')

describe('<Gameboard />', () => {
  test('Gameboard is rendered', () => {
    const myFakeDispatch = jest.fn()
    useDispatch.mockReturnValue(myFakeDispatch)
    render(<GameBoard />)
    const gameboard = screen.getByTestId('gameboard-testid')
    expect(gameboard).toBeInTheDocument()
  })
})
