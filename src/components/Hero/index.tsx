import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className={styles.heading}>
          Turning ideas<br />into interactive experiences
        </h1>
        <p className={styles.subtext}>
          I’m a front-end developer crafting modern, fast, and visually striking web experiences that leave a lasting impact.
        </p>
        <a href="#contact" className={styles.cta}>
          Let’s Connect
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
