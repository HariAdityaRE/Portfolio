import React from 'react';
import styles from './Header.module.css';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react'; // Optional: you can stick with 🌓 emoji too

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Hari Aditya</div>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#buddies">Buddies</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Toggle Button using theme state */}
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
