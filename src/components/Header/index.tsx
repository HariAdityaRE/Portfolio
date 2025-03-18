import React, {useState} from 'react';
import styles from './Header.module.css';
import strings from '../../strings/strings.json'
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>{strings.Header.Title}</div>

        <nav className={styles.nav}>
          <a href="#home">{strings.Header.Nav.Home}</a>
          <a href="#projects">{strings.Header.Nav.Projects}</a>
          <a href="#about">{strings.Header.Nav.About}</a>
          <a href="#buddies">{strings.Header.Nav.Buddies}</a>
          <a href="#contact">{strings.Header.Nav.Contact}</a>
        </nav>

        <div className={styles.iconContainer}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className={styles.menuToggle}
            onClick={handleMenuToggle}
            aria-label={strings.Header.Menu.AriaLabel}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className={styles.mobileNav}>
            <a href="#home" onClick={handleLinkClick}>{strings.Header.Nav.Home}</a>
            <a href="#projects" onClick={handleLinkClick}>{strings.Header.Nav.Projects}</a>
            <a href="#about" onClick={handleLinkClick}>{strings.Header.Nav.About}</a>
            <a href="#buddies" onClick={handleLinkClick}>{strings.Header.Nav.Buddies}</a>
            <a href="#contact" onClick={handleLinkClick}>{strings.Header.Nav.Contact}</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
