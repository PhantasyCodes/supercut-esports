import React from 'react'
import Nav from '../components/Nav'
import './Home.css'
import Hero from '../components/home/Hero'
import Fortnite from '../components/home/Fortnite'
import COD from '../components/home/COD'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Home = () => {
  return (
    <div>
      <Nav />
      <Parallax pages={3}>
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.4}>
          <Fortnite />
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={0.2}>
          <COD />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Home