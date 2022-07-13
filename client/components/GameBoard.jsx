//external dependencies

import React from 'react'
import Counter from './Counter'
import Dice from './Dice'

export default function GameBoard() {
  console.log('hello')
  return (
    <>
      <section className="main">
        <Dice />
        <Counter />
      </section>
    </>
  )
}
