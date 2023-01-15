'use client'
import { Footer } from '../components';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion'

const BottomPart = () => (
    <motion.div
        className=''
    >
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.75 }}
        >
            <Footer />
        </motion.div>
    </motion.div>


);

export default BottomPart;