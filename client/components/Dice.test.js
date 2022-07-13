const Dice = require('../actions/actions')
import '@testing-library/jest-dom'
import '@babel/preset-typescript'
import '@testing-library/react'

//Todo list
test('setup working', () => {
  expect(true).toBeTruthy()
})

test('dice rolls double', () => {
  const roll = [3, 2, 3]
  const expected = 2
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

test('dice rolls run 1, 2, 3', () => {
  const roll = [1, 2, 3]
  const expected = 'lose double bet!'
  const actual = Dice.scoreRun(roll)
  expect(actual).toBe(expected)
})

test('dice rolls run 4, 5, 6', () => {
  const roll = [4, 5, 6]
  const expected = 'win double bet!'
  const actual = Dice.scoreRun(roll)
  expect(actual).toBe(expected)
})

test('pisser hits', () => {
  const pisser = 99
  const expected = 'PISSER!'
  const actual = Dice.checkPisser(pisser)
  expect(actual).toBe(expected)
})

//test if bust rolls
test('dice rolls bust', () => {
  const array = [3, 1, 6]
  const pisser = 98
  const expected = 'bust'
  const actual = Dice.scoreBust(array, pisser)
  expect(actual).toBe(expected)
})
//tests order of dice changes to ascending order
