//external dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'
import Counter from './Counter'
import Dice from './Dice'
import Nav from './Nav'

function App() {
  console.log('hello')
  return (
    <>
      <Router>
        <Nav />
        <section className="main">
          <Dice />
          <Counter />
        </section>
      </Router>
    </>
  )
}

export default App
