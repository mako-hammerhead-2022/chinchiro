/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { arrPlayers } from '../../../test/fakeData'
import Player from '../Player'

import PlayersList from '../PlayersList'

jest.mock('../Player')
Player.mockImplementation(({ id }) => {
  return <div>Player {id}</div>
})

describe('<PlayersList />', () => {
  const fakeStore = {
    getState: () => ({}), // make this a function that returns an object of state if you want
    dispatch: jest.fn(),
    subscribe: jest.fn(),
  }
  test('array of 4 players is rendered onto cards', () => {
    render(
      <Provider store={fakeStore}>
        {/* fake props are passed */}
        <PlayersList players={arrPlayers} />
      </Provider>
    )
    const players = screen.getAllByText(/Player/i)
    expect(players).toHaveLength(4)
  })
})
