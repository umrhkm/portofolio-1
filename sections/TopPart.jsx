'use client'
import { ContactSide, Navbar } from '../components';
import { Project, Skill, Hero } from '.'
import { motion } from 'framer-motion';

const TopPart = () => (
    <motion.div

        className='bg-cream'
    >
        <Navbar />
        <div className='flex flex-col gap-[144px] items-center overflow-visible pt-[72px] md:pt-[84px] xl:pt-[96px] pb-[100px]'>
            <Hero />
            <Project />
            <Skill />
        </div>
    </motion.div>

);

export default TopPart;