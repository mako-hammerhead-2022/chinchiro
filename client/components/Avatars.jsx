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
  {
    img: 7,
    loc: 'img/punk2890.png',
  },
  {
    img: 8,
    loc: 'img/punk0009.png',
  },
  {
    img: 9,
    loc: 'img/punk0062.png',
  },
  {
    img: 10,
    loc: 'img/punk0090.png',
  },
  {
    img: 11,
    loc: 'img/punk0092.png',
  },
  {
    img: 12,
    loc: 'img/punk0101.png',
  },
  {
    img: 13,
    loc: 'img/punk0149.png',
  },
  {
    img: 14,
    loc: 'img/punk0303.png',
  },
  {
    img: 15,
    loc: 'img/punk0363.png',
  },
  {
    img: 16,
    loc: 'img/punk0393.png',
  },
  {
    img: 17,
    loc: 'img/punk0514.png',
  },
]

export default function Avatars({ handleAddAvatar }) {
  const handleClick = (data) => {
    console.log(data)
    const avatarData = {
      name: data,
      value: data,
    }
    handleAddAvatar(avatarData)
  }

  const avatars = avatarArr.map((avatar, i) => {
    return (
      <div
        key={i}
        className="avatar-container"
        name={avatar.loc}
        value={avatar.loc}
        onClick={() => {
          handleClick(avatar.loc)
        }}
      >
        <img src={avatar.loc} alt="avatar" className="avatar-img" />
      </div>
    )
  })
  return (
    <>
      <div className="avatar-collection-container">{avatars}</div>
    </>
  )
}
