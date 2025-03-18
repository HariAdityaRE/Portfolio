import React from 'react';
import strings from '../../strings/strings.json'
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
          {strings.Hero.Title}
        </h1>
        <p className={styles.subtext}>
          {strings.Hero.SubTitle}
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            {strings.Hero.ActionButtons.PrimaryBtn}
          </a>
          <a
            href="/assets/HariAditya_Resume.pdf"
            download
            className={styles.resumeButton}
          >
            {strings.Hero.ActionButtons.SecondaryBtn}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
