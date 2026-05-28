import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { type Theme, useTheme } from 'remix-themes';
import { SECTIONS } from '~/constants/section';
import Navigation from '../Navigation/Navigation';
import Switch from '../Switch/Switch';
import * as s from './styles.css';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

const Header = () => {
  const [mounted, setMounted] = useState(false);

  const [theme, setTheme] = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme: Theme = (theme ?? 'light') as Theme;

  const handleToggle = () => {
    setTheme((currentTheme === 'light' ? 'dark' : 'light') as Theme);
  };

  return (
    <header className={s.headerStyle}>
      <Link to="/" className={s.logoStyle}>
        <h1 className={s.logoStyle}>Daeun Nam</h1>
      </Link>

      <div className={s.navigationContainer}>
        <Navigation activeSection={activeSection} />
        <Link to="/blog" className={s.blogLink}>
          Blog
        </Link>
      </div>

      {mounted ? <Switch mode={currentTheme} onChange={handleToggle} /> : null}
    </header>
  );
};

export default Header;
