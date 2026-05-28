import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import * as s from './styles.css';

export const LINKS = {
  GITHUB: 'https://github.com/namdaeun',
  LINKEDIN: 'https://www.linkedin.com/in/skaekdms/',
  EMAIL: 'mailto:nde40345@gmail.com',
  BLOG: 'https://velog.io/@namdaeun/posts',
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const introSectionHeight = window.innerHeight;

      if (currentScrollY <= introSectionHeight) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer className={`${s.footer} ${isVisible ? s.visible : s.hidden}`}>
      <div className={s.linkSection}>
        <ul className={s.linkList}>
          <li className={s.linkItem}>
            <Link to={LINKS.GITHUB} className={s.link}>
              Github →
            </Link>
          </li>
          <li className={s.linkItem}>
            <Link to={LINKS.LINKEDIN} className={s.link}>
              Linkedin →
            </Link>
          </li>
          <li className={s.linkItem}>
            <Link to={LINKS.BLOG} className={s.link}>
              Velog →
            </Link>
          </li>
        </ul>
      </div>
      <p className={s.period}>2023-2025</p>
    </footer>
  );
};

export default Footer;
