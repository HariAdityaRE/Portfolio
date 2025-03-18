import React from 'react';
import strings from '../../strings/strings.json'
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
        <h2 className={styles.title}>{strings.About.Title}</h2>
        <p className={styles.description}>{strings.About.Description.Para1}</p>
        <p className={styles.description}>{strings.About.Description.Para2}</p>
      </motion.div>
    </section>
  );
};

export default About;
