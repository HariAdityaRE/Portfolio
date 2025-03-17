import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.avatarWrapper}>
          <img src="/images/profile.jpg" alt="Hari Aditya" className={styles.avatar} />
        </div>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I'm a passionate Front-End Developer with 2 years of experience, skilled in building
          responsive web interfaces using React, TypeScript, and modern tooling. I enjoy bringing designs to life, writing clean code, and learning new technologies.
        </p>
        <p className={styles.description}>
          Currently, I’m working at TCS, building scalable solutions for a Microsoft client. I’m now looking to transition into a product company where I can grow technically and work on exciting user-facing products.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
