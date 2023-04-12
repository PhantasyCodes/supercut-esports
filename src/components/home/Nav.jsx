import React from 'react'
import Logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <img src={Logo} alt='Supercut Esports Logo' />
        </div>
    </div>
  )
}

export default Nav