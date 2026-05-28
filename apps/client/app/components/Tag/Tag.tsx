import type { ComponentPropsWithRef } from 'react';
import { backgroundStyle, textStyle } from './styles.css';

interface TagProps extends ComponentPropsWithRef<'div'> {
  size?: 'sm' | 'lg';
}

const Tag = ({ size = 'lg', children }: TagProps) => {
  return (
    <div className={backgroundStyle({ size })}>
      <span className={textStyle({ size })}>{children}</span>
    </div>
  );
};

export default Tag;
