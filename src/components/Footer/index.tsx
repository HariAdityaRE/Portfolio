import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Hari Aditya. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/HariAdityaRE" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hariaditya24" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hariadityabhamidipati@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
