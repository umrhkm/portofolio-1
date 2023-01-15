'use client'
import React from 'react'

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant2, fadeIn } from '../utils/motion'

function CustomTexts({ name, index }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.p
        variants={index % 2 === 0 ? slideIn('right', 'tween', 0, 1) : slideIn('left', 'tween', 0, 1)}
        className='xl:text-9xl md:text-8xl text-7xl text-dark font-extralight xl:leading-[80px] md:leading-[64px] leading-[44px]'
      >
        {name}
      </motion.p>
    </motion.div>

  )
}

export default CustomTexts