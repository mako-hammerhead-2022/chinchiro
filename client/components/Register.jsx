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
    auth0Id: '',
    email: '',
    userName: '',
    avatar: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email,
    })
    console.log(form)
  }, [user])

  const handleFormUpdate = (e) => {
    let key = e.target.name
    let value = e.target.value
    let prev = { ...form }
    prev[key] = value
    setForm(prev)
  }

  const handleAddAvatar = (data) => {
    console.log(data)
    let key = 'avatar'
    let value = data.value
    let prev = { ...form }
    prev[key] = value
    setForm(prev)
    console.log(form)
  }

  async function handleClick() {
    await addUser(form)
    navigate('/')
  }

  return (
    <div className="registration-container">
      <div className="details-container">
        <div className="details">
          <h2>Register</h2>
          <div htmlFor="email">Email:</div>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            disabled={true}
          />

          <div htmlFor="userName">Username:</div>
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

        <button type="button" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  )
}

export default Register
