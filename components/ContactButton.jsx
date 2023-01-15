'use client';

import Link from 'next/link'
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, zoomIn } from '../utils/motion'

const ContactButton = ({ id, name, imgUrl, url, index, active, handleHover }) => (
  <motion.div
    variants={zoomIn(index * 0.35, 0.5)}
    className='h-[160px] w-[160px] xl:h-[240px] xl:w-[240px] relative'
  >
    <Link
      href={url}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover('')}
      className={`absolute ${active === id ? 'drop-shadow-[0_0_10px_rgba(255,253,208,0.1)] top-[-2px]' : 'drop-shadow-none'} bg-dark h-[144px] w-[144px] xl:h-[216px] xl:w-[216px] rounded-full transition-`}
    >
      <div className='w-full flex justify-center items-center h-full'>
        <img src={imgUrl[1]} alt="contact-logo" className='h-14 xl:h-[72px]' />
      </div>

    </Link>
  </motion.div>
);

export default ContactButton;
