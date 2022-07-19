import { orderDice } from '../client/actions/actions'

export const newUser = {
  auth0_id: 'auth0|000',
  email: 'alice@denton.com',
  username: 'Alice',
  win_tally: 22,
  loss_tally: 5,
  total_earnings: 84,
  avatar: 'img/punk9052.png',
}

export const userInfo = {
  auth0_id: 'auth0|000',
  email: 'alice@denton.com',
  username: 'Alice',
  win_tally: 22,
  loss_tally: 5,
  total_earnings: 84,
  avatar: 'img/punk9052.png',
}

export const arrUsers = [
  {
    auth0_id: 'auth0|456',
    email: 'henry@denton.com',
    username: 'henry',
    win_tally: 10,
    loss_tally: 5,
    total_earnings: 84,
    avatar: 'img/punk9052.png',
  },
  {
    auth0_id: 'auth0|789',
    email: 'margaux@denton.com',
    username: 'margaux',
    win_tally: 15,
    loss_tally: 22,
    total_earnings: 50,
    avatar: 'img/punk9052.png',
  },
  {
    auth0_id: 'auth0|000',
    email: 'alice@denton.com',
    username: 'Alice',
    win_tally: 22,
    loss_tally: 5,
    total_earnings: 84,
    avatar: 'img/punk9052.png',
  },
  {
    auth0_id: 'auth0|999',
    email: 'boris@johnson.com',
    username: 'Boris',
    win_tally: 12,
    loss_tally: 53,
    total_earnings: 24,
    avatar: 'img/punk9052.png',
  },
]

export const player = {
  auth0_id: 1,
  username: 'Vince',
  avatar: 'img/punk9052.png',
  isDealer: 'False',
  wallet: 1000,
  bet: 0,
  result: 0,
}

export const arrPlayers = [
  {
    auth0_id: 1,
    username: 'Vince',
    avatar: 'img/punk9052.png',
    isDealer: 'False',
    wallet: 1000,
    bet: 0,
    result: 0,
  },
  {
    auth0_id: 2,
    username: 'Rupert',
    avatar: 'img/punk9052.png',
    isDealer: 'True',
    wallet: 1000,
    bet: 0,
    result: 0,
  },
  {
    auth0_id: 3,
    username: 'Tim',
    avatar: 'img/punk9052.png',
    isDealer: 'False',
    wallet: 1000,
    bet: 0,
    result: 0,
  },
  {
    auth0_id: 4,
    username: 'Mike',
    avatar: 'img/punk9052.png',
    isDealer: 'False',
    wallet: 1000,
    bet: 0,
    result: 0,
  },
]

function getRandomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export const fakeDiceRoll = orderDice([
  getRandomNum(1, 7),
  getRandomNum(1, 7),
  getRandomNum(1, 7),
])
