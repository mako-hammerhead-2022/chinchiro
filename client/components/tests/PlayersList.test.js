/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSelector, Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getUserInfo } from '../../apiClient'
import { arrPlayers } from '../../../test/fakeData'

import PlayersList from '../PlayersList'

describe('<PlayersList />', () => {
  test.skip('array of 4 players is rendered onto cards', () => {
    render(
      <Provider>
        <PlayersList players={arrPlayers} />
      </Provider>
    )
    screen.debug()
  })
})
