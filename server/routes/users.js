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

router.get('/:authId', (req, res) => {
  let authId = req.params.authId
  db.getUserByAuthId(authId)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})
