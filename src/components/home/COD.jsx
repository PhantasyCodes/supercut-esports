import React from 'react'
import CODlogo from '../../assets/images/COD-logo.png'
import CODimage from '../../assets/images/COD.png'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const COD = () => {
  return (
    <div className='fortnite-container COD'>
      <img className='unique' src={CODimage} alt="fortnite" />
      <div className="fortnite-text">
        <img className='fortnite-logo' src={CODlogo} alt="fortnite" />
        <h2><span>SUPERCUT</span> COD LOBBIES</h2>
        <p>Custom Warzone lobbies with cash prizes as well. Open to all players. Stay tuned on Saturdays and Sundays!</p>
        <motion.button whileHover={{boxShadow: '1rem 1rem 0 black', transition: {type: 'spring', stiffness: 560, damping: 20,}}} className='button'>active lobbies<FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} /></motion.button>
      </div>
    </div>
  )
}

export default COD