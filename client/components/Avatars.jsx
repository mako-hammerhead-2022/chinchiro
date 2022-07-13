//external dependencies
import React from 'react'
import '../styles/index.scss'

const avatarArr = [
  {
    img: 1,
    loc: 'img/punk0561.png',
  },
  {
    img: 2,
    loc: 'img/punk5822.png',
  },
  {
    img: 3,
    loc: 'img/punk7971.png',
  },
  {
    img: 4,
    loc: 'img/punk8857.png',
  },
  {
    img: 5,
    loc: 'img/punk9052.png',
  },
  {
    img: 6,
    loc: 'img/punk9953.png',
  },
]

export default function Avatars({ handleAddAvatar }) {
  const [avatar, setAvatar] = useState('')

  const handleClick = (avatarName) => {
    console.log(avatarName)
  }

  const avatars = avatarArr.map((avatar, i) => {
    return (
      <div
        key={i}
        className="avatar-container"
        onClick={() => {
          handleClick(avatar.loc)
        }}
      >
        <img
          src={avatar.loc}
          alt="avatar"
          className="avatar-img"
          name={avatar.loc}
        />
      </div>
    )
  })
  return (
    <>
      <div className="avatar-collection-container">{avatars}</div>
    </>
  )
}
