import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../apiClient'
import '../styles/index.scss'
import Avatars from './Avatars'

function Register() {
  const user = useSelector((state) => state.loggedInUser)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    auth0Id: user?.auth0Id,
    email: user?.email,
    userName: '',
    avatar: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email,
    })
  }, [user])

  const handleFormUpdate = (e) => {
    let key = e.target.name
    let value = e.target.value
    let prev = { ...form }
    prev[key] = value
    setForm(prev)
  }

  const handleAddAvatar = (data) => {
    let key = 'avatar'
    let value = data.value
    let prev = { ...form }
    prev[key] = value
    setForm(prev)
  }

  async function handleClick() {
    await addUser(form)
    navigate('/game')
  }

  return (
    <div className="registration-container">
      <div className="details-container">
        <div className="details">
          <div className="details-header">
            <h2 className="header">Register</h2>
          </div>

          <div className="subhead" htmlFor="userName">
            Username:
          </div>
          <input
            type="text"
            id="username"
            name="username"
            value={setForm.userName}
            onChange={(e) => handleFormUpdate(e)}
          />
        </div>
        <div className="character-selection-container">
          <Avatars handleAddAvatar={handleAddAvatar} />
        </div>

        <button className="start-btn small" type="button" onClick={handleClick}>
          Start Game
        </button>
      </div>
    </div>
  )
}

export default Register
