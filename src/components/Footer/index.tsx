import React from 'react';
import strings from '../../strings/strings.json'
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} {strings.Footer.Text}
        </p>
        <div className={styles.links}>
          <a href={strings.SocialMedia.GitHub.LinkText} target="_blank" rel="noopener noreferrer">
            {strings.SocialMedia.GitHub.Text}
          </a>
          <a href={strings.SocialMedia.LinkedIn.LinkText} target="_blank" rel="noopener noreferrer">
          {strings.SocialMedia.LinkedIn.Text}
          </a>
          <a href={`mailto:${strings.SocialMedia.Email.LinkText}`}>{strings.SocialMedia.Email.Text}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
