import type { SVGProps } from 'react';
import type React from 'react';

declare module '*.svg' {
  const content: React.FC<SVGProps<SVGAElement>>;

  export default content;
}
