'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn, textVariant2 } from '../utils/motion'
import { skills } from '../constants'
import { CustomTexts } from '../components';

const Skill = () => (
  <section className=''>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.45 }}
      className="mx-auto flex flex-col justify-center items-center gap-8"
    >
      <div>
        <motion.p
          variants={textVariant(0.1)}
          className='font-light text-[16px] md:text-[20px] xl:text-[24px] text-center text-dark text-opacity-25'
        >
          skills
        </motion.p>

        <motion.h1
          variants={textVariant(0.3)}
          className='font-semibold text-[40px] md:text-[48px] xl:text-[56px] text-center text-dark'>
          i'm capable of using these
        </motion.h1>
      </div>
    </motion.div>
    
    <div
      className='flex flex-wrap justify-center items-center gap-7 py-4 md:py-5 xl:py-6'
    >
      {skills.map((skill, index) => (
        <CustomTexts
          key={skill.id}
          {...skill}
          index={index}
        />
      ))}
    </div>

  </section>
);

export default Skill;
