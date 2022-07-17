/** @jest-environment jsdom */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { userInfo } from '../../../test/fakeData'
import { useSelector } from 'react-redux'

import Nav from '../Nav'

jest.mock('react-redux')

describe('<Nav />', () => {
  test.todo('nav bar is rendered')
  test.todo('links are displayed')
})
