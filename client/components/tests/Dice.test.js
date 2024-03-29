const Dice = require('../../actions/actions')

import '@testing-library/jest-dom'
import '@babel/preset-typescript'
import '@testing-library/react'

//Todo list
test('setup working', () => {
  expect(true).toBeTruthy()
})

describe('test dice rolls', () => {
  test('dice rolls double', () => {
    const roll = [3, 2, 3]
    const expected = 2
    const actual = Dice.scoreDouble(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls double fails', () => {
    const roll = [3, 2, 5]
    const expected = false
    const actual = Dice.scoreDouble(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls triple non 1', () => {
    const roll = [5, 5, 5]
    const expected = 'x3'
    const actual = Dice.scoreTriple(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls snake eyes', () => {
    const roll = [1, 1, 1]
    const expected = 'x5'
    const actual = Dice.scoreTriple(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls triple fails', () => {
    const roll = [5, 5, 2]
    const expected = false
    const actual = Dice.scoreTriple(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls run 1, 2, 3', () => {
    const roll = [1, 2, 3]
    const expected = '-x2'
    const actual = Dice.scoreRun(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls run 4, 5, 6', () => {
    const roll = [4, 5, 6]
    const expected = 'x2'
    const actual = Dice.scoreRun(roll)
    expect(actual).toBe(expected)
  })

  test('dice rolls run fails', () => {
    const roll = [4, 1, 6]
    const expected = false
    const actual = Dice.scoreRun(roll)
    expect(actual).toBe(expected)
  })

  test('pisser hits', () => {
    const pisser = 99
    const expected = 'pisser'
    const actual = Dice.checkPisser(pisser)
    expect(actual).toBe(expected)
  })

  test('pisser fails', () => {
    const pisser = 98
    const expected = false
    const actual = Dice.checkPisser(pisser)
    expect(actual).toBe(expected)
  })

  test.skip('dice rolls bust', () => {
    const roll = [3, 1, 6]
    const pisser = 98
    const expected = 'bust'
    const actual = Dice.scoreBust(roll, pisser)
    expect(actual).toBe(expected)
  })

  test('Orders dice lowest to highest', () => {
    const D1 = 2
    const D2 = 6
    const D3 = 4
    const expected = [2, 4, 6]
    const actual = Dice.orderDice([D1, D2, D3])
    expect(actual).toEqual(expected)
  })
})
