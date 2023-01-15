'use client'

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion'
import { TopPart, BottomPart } from '../sections';
import { ContactSide } from '../components';
import { useState } from 'react'

const Body = () => {

  return (
    <motion.div
      className='bg-dark'
    >
      <motion.div
        initial={{scale: 0.95, }}
        whileInView={{scale: 1}}
        transition = {{
          type: 'spring',
          stiffness: 80,
          duration: 1,
        }}
        viewport={{ once: false, amount: 0.2435 }}
        className='bg-cream w-full relative'
      >
        <ContactSide />
        <motion.div className='max-w-7xl mx-auto flex-col items-center overflow-hidden px-6  py-5 '>
          <TopPart />
        </motion.div>
      </motion.div>
      <BottomPart />
    </motion.div>


  );
}

export default Body;