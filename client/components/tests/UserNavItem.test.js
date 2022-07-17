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
  test.todo('check username is rendered')
  test.todo('check users win tally is rendered')
  test.todo('check users earnings are rendered')
})
