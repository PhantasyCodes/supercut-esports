import React from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import styled from 'styled-components'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import arrowRight from '../../assets/icons/next.png'
import arrowLeft from '../../assets/icons/prev.png'
import callOfDuty from '../../assets/images/cod.jpg'
import fifa from '../../assets/images/fifa.png'
import fortnite from '../../assets/images/fortnite.png'
import fortniteLogo from '../../assets/images/fortnite-logo.png'
import codLogo from '../../assets/images/cod-logo.png'
import fifaLogo from '../../assets/images/fifa-logo.png'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <motion.div whileHover={{boxShadow: '1rem 1rem 0 black', transition: {type: 'spring', stiffness: 560, damping: 20,}}} style={{cursor: 'pointer', position: 'absolute', bottom: '-6rem', left: '5rem', zIndex: '98', display: "flex", alignItems: "center", backgroundColor: "#78E185", padding:"2rem 2rem"}} onClick={onClick}>
            <h2 style={{fontSize: '4rem', marginRight: '1rem', marginBottom: '5px'}}>NEXT</h2>
            <img src={arrowRight} alt="right" />
        </motion.div>
    )
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <motion.img whileHover={{scale:1.1}} style={{cursor: 'pointer', position: 'absolute', bottom: '-7rem', left: '3rem',  zIndex: '98', display: 'none'}} src={arrowLeft} alt="left" onClick={onClick}/>
    )
}

const Slide = styled.div`
    display: flex;
    margin-right: 20rem;
    overflow: hidden;
`;

const GameCarousel = () => {
  return (
    <div>
        <Slider {...settings}>
            <Slide>
                <div style={{display: 'flex'}} className='game-slide'>
                    <h2><span>SUPERCUT</span> COD LOBBIES</h2>
                    <img className='unique-img' src={callOfDuty} alt="COD" />
                    <div className="slide-text">
                        <img src={codLogo} alt="cod" />
                        <p>Custom Warzone lobbies with cash prizes as well. Open to all players. Stay tuned on Saturdays and Sundays!</p>
                        <motion.button 
                            whileHover={{boxShadow: '1rem 1rem 0 black', 
                            transition: {type: 'spring', stiffness: 560, damping: 20,}}} 
                            className='button'>Current Lobbies
                            <FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} />
                        </motion.button>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div style={{display: 'flex'}} className='game-slide'>
                    <h2><span>SUPERCUT</span> FIFA LOBBIES</h2>
                    <img className='unique-img' src={fifa} alt="fifa" />
                    <div className="slide-text">
                        <img src={fifaLogo} alt="fifa" />
                        <p>FIFA events with cash prizes, and more winnings. Open to all players. Multiple types of tournaments and prizes!</p>
                        <motion.button 
                            whileHover={{boxShadow: '1rem 1rem 0 black', 
                            transition: {type: 'spring', stiffness: 560, damping: 20,}}} 
                            className='button'>Current Lobbies
                            <FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} />
                        </motion.button>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div style={{display: 'flex'}} className='game-slide'>
                    <h2><span>SUPERCUT</span> Fortnite scirms</h2>
                    <img className='unique-img' src={fortnite} alt="COD" />
                    <div className="slide-text">
                        <img src={fortniteLogo} alt="cod" />
                        <p>Custom Fortnite lobbies with cash prizes, and more winnings. Open to all players. Stay tuned on Saturdays and Sundays!</p>
                        <motion.button 
                            whileHover={{boxShadow: '1rem 1rem 0 black', 
                            transition: {type: 'spring', stiffness: 560, damping: 20,}}} 
                            className='button'>Current Scirms
                            <FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} />
                        </motion.button>
                    </div>
                </div>
            </Slide>
        </Slider>
    </div>
  )
}

export default GameCarousel