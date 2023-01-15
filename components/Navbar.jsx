'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='py-1'
  >
    <div className="gap-[10px] flex justify-between items-center">
      <img
        src="/logo-dark.svg"
        alt="logo"
        className="w-7 h-7 md:w-9 md:h-9 transition-all"
      />
      <img
        src="/menu.svg"
        alt="menu"
        className="w-7 h-7 md:w-9 md:h-9 transition-all"
      />
      <img
        src="/sun.svg"
        alt="sun"
        className="w-7 h-7 md:w-9 md:h-9 transition-all"
      />
    </div>
  </motion.nav>
);

export default Navbar;
