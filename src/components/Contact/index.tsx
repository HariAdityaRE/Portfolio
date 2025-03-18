import React, { useState } from 'react';
import strings from '../../strings/strings.json'
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = strings.SocialMedia.Email.LinkText;

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
        <h2>{strings.Contact.Title}</h2>
        <p>{strings.Contact.SubTitle}</p>

        <div className={styles.emailContainer}>
          <span className={styles.email}>{email}</span>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className={styles.emailLink}>
          <a href={`mailto:${email}`}>{strings.Contact.SendMailLinkText}</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
