/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { userInfo } from '../../../test/fakeData'
import { useSelector } from 'react-redux'

import UserNavItem from '../UserNavItem'

jest.mock('react-redux')

const user = userInfo

describe('<UserNavItem />', () => {
  test('shows a users avatar image', () => {
    useSelector.mockReturnValue(user)
    render(<UserNavItem userInfo={user} />)
    const UserAvatarElement = screen.getByRole('img')
    expect(UserAvatarElement).toHaveAttribute('src')
  })

  test('check username is rendered', () => {
    useSelector.mockReturnValue()
    render(<UserNavItem userInfo={user} />)
    const userName = screen.getByText('Alice')
    expect(userName.textContent).toBe('Alice')
  })

  test('check users win tally is rendered', () => {
    useSelector.mockReturnValue()
    render(<UserNavItem userInfo={user} />)
    const userWins = screen.getByTestId('win-tally')
    expect(userWins.textContent).toBe('Wins: 22')
  })

  test('check users earnings are rendered', () => {
    useSelector.mockReturnValue()
    render(<UserNavItem userInfo={user} />)
    const usersEarnings = screen.getByTestId('total-earnings')
    expect(usersEarnings.textContent).toBe('Earnings: 84')
  })
})
