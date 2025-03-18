import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';
import strings from '../../strings/strings.json'

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollButton} ${visible ? styles.visible : ''}`}
      aria-label={strings.ScrollToTop.AriaLabel}
      title={strings.ScrollToTop.Title}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
