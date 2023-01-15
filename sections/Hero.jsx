'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion'

const Hero = () => (
  <section className=''>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.45 }}
      className="mx-auto flex flex-col justify-center items-center gap-8"
    >
      <motion.div
        variants={slideIn('up', 'tween', 0.2, 1)}
        className='w-full'
      >
        <div className='gradient-light w-[300px] h-[300px] md:w-[340px] md:h-[340px] xl:w-[380px] xl:h-[380px] rounded-full mx-auto transition-all' />
      </motion.div>

      <div className='flex flex-col items-center justify-center z-10'>
        <motion.p
          variants={textVariant(1.1)}
          className='font-light text-[16px] md:text-[20px] xl:text-[24px] text-center text-dark text-opacity-25'
        >
          about
        </motion.p>
        <motion.h1
          variants={textVariant(1.1)}
          className='font-semibold text-[40px] md:text-[48px] xl:text-[56px] text-center text-dark'>
          umar hakim
        </motion.h1>
        <motion.h2
          variants={textVariant(1.2)}
          className='font-semibold text-lg md:text-xl xl:text-2xl text-center text-dark text-opacity-75'>
          fullstack developer
        </motion.h2>
        <motion.p
          variants={textVariant(1.3)}
          className='font-normal text-sm md:text-base xl:text-xl text-center text-dark pt-3 md:pt-4 xl:pt-5 md:w-[700px] xl:w-[912px]'
        >
          hi! i'm an undergraduate 20 years old student majoring in information systems and technology at Bandung Institute of Technology that interest in web development
        </motion.p>
      </div>

      <div className="relative w-[188px] md:w-[208px] h-12 md:h-14">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1}}
          onHoverStart={e => { }}
          onHoverEnd={e => { }}
          variants={textVariant(1.3)}
          className='bg-dark w-[180px] h-10 text-base md:w-[200px] md:h-12 md:text-lg text-cream rounded-full button absolute top-1 left-1'
        >
          download cv
        </motion.button>
      </div>

      <motion.img
        variants={fadeIn('up', 'tween', 1.4, 0.5)}
        src="/scroll-arrow-light.svg"
        alt="scroll-arrow"
        className='pt-10'
      />

    </motion.div>

  </section>
);

export default Hero;
