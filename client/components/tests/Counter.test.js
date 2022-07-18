/** @jest-environment jsdom */

import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import { useDispatch } from 'react-redux'

import Counter from '../Counter'

jest.mock('react-redux')

describe('<Counter />', () => {
  test('Counter header rendered', () => {
    const myFakeDispatch = jest.fn()
    useDispatch.mockReturnValue(myFakeDispatch)
    render(<Counter />)
    let header = screen.getByRole('heading')
    expect(header.textContent).toContain('Bet')
  })

  test('Buttons rendered', () => {
    render(<Counter />)
    let buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(8)
  })

  describe('check button clicks', () => {
    test('Clicking add +1 adds $1 to bet', () => {
      render(<Counter />)
      fireEvent(
        screen.getByRole('button', { name: '+1' }),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
      let betAmount = screen.getByRole('heading').textContent
      console.log(betAmount)
      expect(betAmount).toBe('Bet: $1')
    })
    test('Clicking add +5 adds $5 to bet', () => {
      render(<Counter />)
      fireEvent(
        screen.getByRole('button', { name: '+5' }),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
      let betAmount = screen.getByRole('heading').textContent
      expect(betAmount).toBe('Bet: $5')
    })
    test('Clicking add +10 adds $10 to bet', () => {
      render(<Counter />)
      fireEvent(
        screen.getByRole('button', { name: '+10' }),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
      let betAmount = screen.getByRole('heading').textContent
      expect(betAmount).toBe('Bet: $10')
    })
  })
})
