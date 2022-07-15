/** @jest-environment jsdom */

import React from 'react'
import { screen, render, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import UserNavItem from '../UserNavItem'

import { arrTwoUsers } from '../../../test/fakeData'

import { useSelector } from 'react-redux'

jest.mock('react-redux')

const users = arrTwoUsers

describe('<UserNavItem />', () => {
  it('renders a userData', () => {
    useSelector.mockReturnValue(users[0])
    render(<UserNavItem />)
    const UserDiv = screen.getByRole('img')
    // .toHaveAttribute('src')
    expect(UserDiv).toHaveAttribute('src')
  })
})
