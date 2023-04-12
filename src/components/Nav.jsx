import React from 'react'
import Logo from '../assets/logo.png'
import HamburgerMenu from './HamburgerMenu'
import { useState } from 'react'

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
        <div className='nav-logo'>
            <img src={Logo} alt='Supercut Esports Logo' />
        </div>
        <HamburgerMenu toggle={toggleMenu} isOpen={isOpen}/>
    </div>
  )
}

export default Nav