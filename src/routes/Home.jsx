import React from 'react'
import Nav from '../components/Nav'
import './Home.css'
import Hero from '../components/home/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import GameCarousel from '../components/home/GameCarousel'


const Home = () => {
  return (
    <div>
      <Nav />
      <Parallax pages={2}>
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.4}>
          <GameCarousel />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Home