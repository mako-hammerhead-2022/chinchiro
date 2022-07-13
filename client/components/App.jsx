import React from 'react'
import Counter from './Counter'
import Dice from './Dice'

function App () {
  console.log('hello')
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Dice />
        <Counter/>
      </section>
    </>
  )
}

export default App
