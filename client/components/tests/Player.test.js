/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { player } from '../../../test/fakeData'
import { useAuth0 } from '@auth0/auth0-react'

import Player from '../Player'

jest.mock('react-redux')
jest.mock('../../apiClient')
jest.mock('@auth0/auth0-react')

describe('<Player />', () => {
  beforeEach(async () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
    })
  })
  test('Player is rendered', () => {
    render(
      <Player
        id={player.id}
        name={player.username}
        avatar={player.avatar}
        isDealer={player.isDealer}
        wallet={player.wallet}
        bet={player.bet}
        result={player.result}
      />
    )
    const userName = screen.getByText('Vince').textContent
    expect(userName).toBe('Vince')
    const wallet = screen.getAllByRole('heading')[1].textContent
    expect(wallet).toContain('Wallet: 1000')
  })
})
