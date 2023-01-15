'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant2 } from '../utils/motion'
import { projects } from '../constants'
import { ProjectCard } from '../components'
import { useState } from 'react'

const Project = () => {

  const [active, setActive] = useState('')

  return (
    <section className='' id='projects'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.45 }}
        className="mx-auto flex flex-col justify-center items-center gap-8"
      >
        <div>
          <motion.p
            variants={textVariant2}
            className='font-light text-[16px] md:text-[20px] xl:text-[24px] text-center text-dark text-opacity-25'
          >
            projects
          </motion.p>

          <motion.h1
            variants={textVariant2}
            className='font-semibold text-[40px] md:text-[48px] xl:text-[56px] text-center text-dark'>
            stuffs i've worked on
          </motion.h1>
        </div>

        <div
          className='flex items-center justify-center flex-wrap gap-[8px]'
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleHover={setActive}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}

export default Project;
