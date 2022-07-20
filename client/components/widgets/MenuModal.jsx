import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useAuth0 } from '@auth0/auth0-react'

export default function MenuModal(props) {
  const [show, setShow] = useState(false)
  const { logout } = useAuth0()

  const handleClose = () => setShow(false)

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>CHINCHIRO PUNK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="menu-container">
            <div className="menu-item-container">
              <div className="menu-item">PROFILE</div>
            </div>
            <div className="menu-item-container">
              <div className="menu-item">RULES</div>
            </div>
            <div className="menu-item-container">
              <div className="menu-item" onClick={handleLogoff}>
                LOGOFF
              </div>
            </div>
            <div className="menu-item-container" onClick={handleClose}>
              <div className="menu-item">CLOSE</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
