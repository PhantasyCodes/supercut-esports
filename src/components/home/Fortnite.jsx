import React from 'react'
import forniteLogo from '../../assets/images/fortnite-logo.png'
import fortnite from '../../assets/images/fortnite.png'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Fortnite = () => {
  return (
    <div className='fortnite-container'>
      <img className='unique' src={fortnite} alt="fortnite" />
      <div className="fortnite-text">
        <img className='fortnite-logo' src={forniteLogo} alt="fortnite" />
        <h2><span>SUPERCUT</span> SCIRMS</h2>
        <p>Custom Fortnite lobbies with cash prizes, and more winnings. Open to all players. Stay tuned on Saturdays and Sundays!</p>
        <motion.button whileHover={{boxShadow: '1rem 1rem 0 black', transition: {type: 'spring', stiffness: 560, damping: 20,}}} className='button'>active scirms<FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} /></motion.button>
      </div>
    </div>
  )
}

export default Fortnite