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
        <motion.img whileHover={{scale:1.1}} style={{cursor: 'pointer', position: 'absolute', bottom: '-5rem', left: '10rem', zIndex: '98'}} src={arrowRight} alt="right" onClick={onClick}/>
    )
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <motion.img whileHover={{scale:1.1}} style={{cursor: 'pointer', position: 'absolute', bottom: '-5rem', left: '1rem',  zIndex: '98'}} src={arrowLeft} alt="left" onClick={onClick}/>
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
                    <img src={callOfDuty} alt="COD" />
                    <div className="slide-text">
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
                    <h2><span>SUPERCUT</span> COD LOBBIES</h2>
                    <img src={callOfDuty} alt="COD" />
                    <div className="slide-text">
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
                    <h2><span>SUPERCUT</span> COD LOBBIES</h2>
                    <img src={callOfDuty} alt="COD" />
                    <div className="slide-text">
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
        </Slider>
    </div>
  )
}

export default GameCarousel