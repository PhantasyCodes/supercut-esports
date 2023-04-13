import React from 'react'
import Logo from '../assets/logo.png'
import HamburgerMenu from './HamburgerMenu'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
      setOpen(!isOpen);
  }

  const menuVariants = {
      open: {
          transform: "translateX(0%)"
      }, 
      closed: {
          transform: "translateX(100%)"
      }
  }

  const menuTransition = { type: "spring", duration: 1, stiffness: 33, delay: 0.1 }

  const navTransition = { type: 'spring', stiffness: 560, damping: 20 }

  const navVariants = {
      show: {
          x: 0,
          opacity: 1
      },
      hide: {
          x: 100,
          opacity: 0
      }
  }
  return (
    <div className='nav'>
        <motion.div initial={{y: -100}} animate={{y:0, transition: {...navTransition}}} className='nav-logo'>
            <img src={Logo} alt='Supercut Esports Logo' />
        </motion.div>
        <HamburgerMenu transition={navTransition} toggle={toggleMenu} isOpen={isOpen}/>
    </div>
  )
}

export default Nav