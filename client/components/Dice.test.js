const Dice = require('./Dice.jsx')
import '@testing-library/jest-dom'

//Todo list

test('if dice rolls double', () => {
  const roll = [2, 3, 3]
  const expected = 2
  const actual = Dice.rollDiceP1(roll)
  expect(actual.toBe(expected))
})
//Test if dice rolls triple
//test if dice rolls (1, 2, 3)
//test if dice rolls (4, 5, 6)
//test if pisser hits
//test if bust rolls
//tests order of dice changes to ascending order
