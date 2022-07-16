import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function AppModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chinchiro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="paragraph-container">
            <div className="text">
              Chinchiro (Chinchirorin) is a traditional Japanese dice game.
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">The Dealer</div>
            <div className="text">
              One of the players, this role shifts after the round. Dealer plays
              against all other players. Other players play against Dealer only.
              Dealer rolls first dice.
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Bets</div>
            <div className="text">
              Each player makes a bet but not Dealer. Dealer meets players bets
              if they win.
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Dice Roll</div>
            <div className="text">
              Each player rolls the dice. If two of the dice have the same
              number, that number is the score of the player. For example, the
              player rolls 1-3-3, then the score is 3. If the score is higher
              than the dealer's, the player wins.
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Faults</div>
            <div className="text">
              If a dice misses the bowl, it is a fault and the player has to
              roll dice again. If dice do not produce a score (e.g. 1-4-6), it
              is also a fault and the player has to roll again. 3 faults in a
              row mean that the player loses this round and his bet.
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Special: Triples</div>
            <div className="text">
              Special: Triples If a player rolls triples, e.g. 6-6-6, then he
              wins triple of his bet.
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Special: 1-1-1</div>
            <div className="text">
              If player rolls triple-1 they lose triple their bet
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Special: 1-2-3</div>
            <div className="text">
              If player rolls 1-2-3 they lose double their bet
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-header">Special: 4-5-6</div>
            <div className="text">
              If player rolls 4-5-6 they win double their bet
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
