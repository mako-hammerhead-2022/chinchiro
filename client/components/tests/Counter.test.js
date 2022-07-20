/** @jest-environment jsdom */

import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useDispatch } from 'react-redux'
import { addBet, removeBet } from '../../reducers/players'

import Counter from '../Counter'

jest.mock('react-redux')
const myFakeDispatch = jest.fn()
useDispatch.mockReturnValue(myFakeDispatch)
describe('<Counter />', () => {
  test('Counter header rendered', () => {
    render(<Counter />)
    let header = screen.getByRole('heading')
    expect(header.textContent).toContain('Bet')
  })

  test('Buttons rendered', () => {
    render(<Counter />)
    let buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(9)
  })

  // .change(getByLabelText(/username/i), {target: {value: 'a'}})
  // integration test -> setup redux and parent component to pass bet down as child
  // dispatch real actions to a real store and see the changes on the screen

  // unit test -> render the counter with dummy prop bet={5}
  // click buttons, assert that correct actions are dispatched
  describe('check button clicks', () => {
    beforeEach(() => {
      render(<Counter bet={1} id={1} />)
    })

    test('Clicking add +1 adds $1 to bet', () => {
      userEvent.click(screen.getByRole('button', { name: '+1' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(addBet(1, 1))
    })

    test('Clicking add -1 removes $1 from bet', () => {
      userEvent.click(screen.getByRole('button', { name: '-1' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(removeBet(1, 1))
    })

    test('Clicking add +5 adds $5 to bet', () => {
      userEvent.click(screen.getByRole('button', { name: '+5' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(addBet(1, 5))
    })

    test('Clicking add -5 removes $5 from bet', () => {
      userEvent.click(screen.getByRole('button', { name: '-5' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(removeBet(1, 5))
    })

    test('Clicking add +10 adds $10 to bet', () => {
      userEvent.click(screen.getByRole('button', { name: '+10' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(addBet(1, 10))
    })
    test('Clicking add -10 removes $10 from bet', () => {
      userEvent.click(screen.getByRole('button', { name: '-10' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(removeBet(1, 10))
    })
    test('Clicking add +50 adds $50 to bet', () => {
      userEvent.click(screen.getByRole('button', { name: '+50' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(addBet(1, 50))
    })

    test('Clicking add -50 removes $50 from bet', () => {
      userEvent.click(screen.getByRole('button', { name: '-50' }))
      expect(myFakeDispatch).toHaveBeenCalledWith(removeBet(1, 50))
    })
  })
})
