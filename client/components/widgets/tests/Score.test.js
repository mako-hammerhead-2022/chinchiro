/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector } from 'react-redux'
import { player } from '../../../../test/fakeData'

import Score from '../Score'

jest.mock('react-redux')

describe('<Score />', () => {
  test('The score grabs current score from redux store', () => {
    useSelector.mockReturnValue(player)
    render(<Score />)
    const initialScore = screen.getByText('0').textContent
    expect(initialScore).toBe('0')
  })
})
