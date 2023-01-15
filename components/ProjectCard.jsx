'use client';
import Link from 'next/link'

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion'

const ProjectCard = ({ id, imgUrl, url, title, method, index, active, handleHover }) => {

  return (
    <motion.div
      variants={fadeIn('up', 'tween', index * 0.35, 0.5)}
      className='w-[300px] h-[372px] xl:w-[388px] xl:h-[482px] relative'
    >
      <Link
        href={url}
        onMouseEnter={() => handleHover(id)}
        onMouseLeave={() => handleHover('')}
        className={`absolute ${active === id ? 'bg-transparent border-4 border-dark w-[300px] h-[356px] xl:w-[388px] xl:h-[450px] top-0 left-0' : 'bg-dark top-[10px] left-2 xl:top-8 xl:left-[13px] w-[286px] h-[352px] xl:w-[362px] xl:h-[450px]'} flex flex-col justify-between items-start p-7 transition-all rounded-[20px]`}
      >
        <div className="w-full flex justify-end">
          <img
            src={active === id ? imgUrl[0] : imgUrl[1]}
            alt="logo"
            className='w-10 h-10 xl:w-[42px] xl:h-[42px]'
          />
        </div>

        <div className={`flex-col pt-[144px] items-start ${active === id ? 'mr-16 xl:mr-[116px]' : 'mr-10 xl:mr-24'}`}>
          <motion.h3
            variants={textVariant(0.4)}
            className={`${active === id ? 'text-dark' : 'text-cream'} text-2xl xl:text-[28px] font-semibold`}
          >
            {title}
          </motion.h3>
        </div>

        <div className='flex items-start gap-[10px]'>
          {method.map((metode, index) => (
            <motion.p
              variants={textVariant(index * 0.4)}
              className={`${active === id ? 'text-dark' : 'text-cream'} text-[12px] xl:text-base font-light italic`}
            >
              {metode}
            </motion.p>
          ))}
        </div>
      </Link>

    </motion.div>
  );

}

export default ProjectCard;
