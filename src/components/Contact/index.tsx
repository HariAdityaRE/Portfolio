// src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hariadityabhamidipati@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>Feel free to reach out. I'm open to freelance work, Full Time Roles, collaboration, or just a chat about frontend tech!</p>

        <div className={styles.emailContainer}>
          <span className={styles.email}>{email}</span>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <a className={styles.emailLink} href={`mailto:${email}`}>
          Or click to send an email →
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
