import React from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useMotionValue, useTransform, animate } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Loader.css'

const ProgressBar = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round);
    
    useEffect(() => {
        const animation = animate(count, 100, { duration: 5 });    
        return animation.stop;
      }, []);

    const navigate = useNavigate();

    const handlePageTransition = () => {
        console.log('page transition')
        navigate('/home')
    }

  return (
    <div className="progress-bar">
        <motion.h2 
        exit={{y:'105vh', transition: {duration: 1,}}}
        >{rounded}</motion.h2>
        <motion.div className='progress' 
            initial={{width:0}} 
            animate={{width:'95vw', transition: {duration: 5,}}} 
            exit={{y:'105vh', transition: {duration: 1,}}}
            onAnimationComplete={handlePageTransition} />

    </div>
  )
}

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

const Loader = () => {
  return (
    <motion.div exit={{y:'100vh', transition: transition}} className="loading-page">
        <ProgressBar />
    </motion.div>
  )
}

export default Loader