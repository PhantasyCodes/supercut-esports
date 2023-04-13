import React from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
        <motion.img whileHover={{scale:1.1}} style={{cursor: 'pointer', position: 'absolute', bottom: '-5rem', left: '15rem', zIndex: '98'}} src={arrowRight} alt="right" onClick={onClick}/>
    )
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <motion.img whileHover={{scale:1.1}} style={{cursor: 'pointer', position: 'absolute', bottom: '-5rem', left: '1rem',  zIndex: '98'}} src={arrowLeft} alt="left" onClick={onClick}/>
    )
}

const GameCarousel = () => {
  return (
    <div>
        <Slider {...settings}>
            <div className='game-slide'>
                <h2><span>SUPERCUT</span> COD LOBBIES</h2>
                <img src={callOfDuty} alt="COD" />
            </div>
            <div className='game-slide'>
                <h1>Nice</h1>
            </div>
            <div className='game-slide'>
                <h1>Nice</h1>
            </div>
            <div className='game-slide'>
                <h1>Nice</h1>
            </div>
        </Slider>
    </div>
  )
}

export default GameCarousel