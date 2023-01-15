'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion'
import { contacts } from '../constants'
import { ContactButton } from '.'
import { useState } from 'react';

const Footer = () => {

  const [active, setActive] = useState('')

  return (
    <motion.footer
      className='flex flex-col gap-16 pt-[24px] pb-[116px]'
    >
      <motion.h1
        variants={textVariant(0.3)}
        className='font-semibold text-[40px] md:text-[48px] xl:text-[56px] text-center text-cream'
      >
        hit me up
      </motion.h1>

      <div className='flex xl:gap-[128px] md:gap-[72px] gap-8 flex-wrap justify-center items-center'>
        {contacts.map((contact, index) => (
          <ContactButton
            key={contact.id}
            {...contact}
            index={index}
            active={active}
            handleHover={setActive}
          />
        ))}
      </div>
    </motion.footer>
  );
}

export default Footer;
