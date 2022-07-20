const express = require('express')
const db = require('../db/users')

const router = express.Router()

module.exports = router

// POST /api/v1/users
router.post('/', async (req, res) => {
  const newUser = req.body
  const { auth0Id, email, username, avatar } = newUser
  const user = {
    auth0_id: auth0Id,
    email,
    username,
    avatar,
  }
  try {
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/allusers', (req, res) => {
  db.getAllUsers()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

router.get('/:authId', (req, res) => {
  let authId = req.params.authId
  console.log(authId)
  db.getUserByAuthId(authId)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.post('/tally', (req, res) => {
  let authId = req.body[0]
  let amount = Number(req.body[1])

  db.updateUserWins(authId, amount)
    .then(() => {
      res.sendStatus(204) // 🥳
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.post('/earnings', (req, res) => {
  let authId = req.body[0]
  let amount = Number(req.body[1])
  db.updateUserEarnings(authId, amount)
    .then(() => {
      res.sendStatus(204)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})
