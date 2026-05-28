import { Link } from '@remix-run/react';
import type { CSSProperties } from '@vanilla-extract/css';
import type React from 'react';
import * as s from './styles.css';

interface NavigationProps {
  activeSection: string;
  style?: CSSProperties;
}

const Navigation = ({ activeSection, style }: NavigationProps) => {
  const getNavigationItem = () => {
    switch (activeSection) {
      case 'about':
        return { label: 'About', path: '/' };
      case 'project':
        return { label: 'Project', path: '#project' };
      case 'experience':
        return { label: 'Experience', path: '#experience' };
      case 'review':
        return { label: 'Peer Review', path: '#review' };
      default:
        return { label: 'Blog', path: '/blog' };
    }
  };

  const currentItem = getNavigationItem();
  return (
    <nav className={s.navigation} style={style as React.CSSProperties}>
      <Link to={currentItem.path} className={s.link}>
        {currentItem.label}
      </Link>
    </nav>
  );
};

export default Navigation;
