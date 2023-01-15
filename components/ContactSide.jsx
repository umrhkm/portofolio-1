'use-client'

import React from 'react'
import { motion } from 'framer-motion'

const ContactSide = () => {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <motion.svg
      width="600"
      height="600"
      className='absolute'
    >
      <motion.line
        className='bg-dark'
      />
    </motion.svg>
  )
}

export default ContactSide