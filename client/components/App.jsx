import React from 'react'
import Counter from './Counter'
import Dice from './Dice'
import Player from './Player'

function App () {
  console.log('hello')
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Player/>
      </section>
    </>
  )
}

export default App
