import React from 'react'
import forniteLogo from '../../assets/images/fortnite-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Fortnite = () => {
  return (
    <div className='fortnite-container'>
        <div className="fortnite-text">
          <img src={forniteLogo} alt="fortnite" />
          <h2>SUPERCUT SCIRMS</h2>
          <p>Custom Fortnite lobbies with cash prizes, and more winnings. Open to all players. Stay tuned on Saturdays and Sundays!</p>
          <button className='button'>active scirms<FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} /></button>
        </div>
    </div>
  )
}

export default Fortnite