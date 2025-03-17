import React from 'react';
import styles from './Buddies.module.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

const buddies = [
  {
    name: 'Varsha Foujdhar',
    description: 'Automation Tester at Capgemini for GE Client',
    image: '/assets/varsha.jpg',
    linkedin: 'https://linkedin.com/in/varshafoujdhar',
    portfolio: '',
  },
  {
    name: 'Suresh K',
    description: 'Sr. Java Microservices Developer',
    image: '/assets/suresh.jpg',
    linkedin: 'https://linkedin.com/in/suresh',
    portfolio: '',
  },
  {
    name: 'Bhargav Pathina',
    description: 'Azure devops engineer at TCS',
    image: '/assets/bhargav.jpg',
    linkedin: 'https://linkedin.com/in/bhargav',
    portfolio: '',
  },
];

const allBuddies = [...buddies, ...buddies];

const Buddies: React.FC = () => {
  return (
    <section id="buddies" className={styles.buddiesSection}>
      <h2>My Buddies</h2>
      <div className={styles.carouselWrapper}>
        <motion.div
          className={styles.carouselTrack}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {allBuddies.map((buddy, index) => (
            <div key={index} className={styles.card}>
              <img src={buddy.image} alt={buddy.name} className={styles.avatar} />
              <h3>{buddy.name}</h3>
              <p>{buddy.description}</p>
              <div className={styles.links}>
                {buddy.linkedin && (
                  <a href={buddy.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {buddy.portfolio && (
                  <a href={buddy.portfolio} target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Buddies;