import coasterImage from '/public/assets/image/img_coaster.png';
import mileImage from '/public/assets/image/img_mile.png';
import tikiImage from '/public/assets/image/img_tiki.png';

export const PROJECTS = [
  {
    id: 1,
    name: 'Tiki',
    period: '2024.07 - 2025.03',
    description: 'Web FE 개발 담당',
    skills: [
      'React',
      'TypeScript',
      'Emotion CSS',
      'Zustand',
      'MSW',
      'Storybook',
      'Figma',
      'Git',
    ],
    imageUrl: tikiImage,
    githubUrl: 'https://github.com/Team-Tiki/tiki-client',
  },
  {
    id: 2,
    name: 'Mile',
    period: '2024.01 - 2024.07',
    description: 'Web FE 개발 담당',
    skills: ['React', 'TypeScript', 'Styled-components', 'Figma', 'Git'],
    imageUrl: mileImage,
    githubUrl: 'https://github.com/Mile-Writings/Mile-Client',
  },
  {
    id: 3,
    name: 'Coaster',
    period: '2024.12 - 2025.03',
    description: 'Web FE 개발 담당',
    skills: ['React', 'TypeScript', 'Emotion CSS', 'ky', 'Figma', 'Git'],
    imageUrl: coasterImage,
    githubUrl: 'https://github.com/Coastee/COASTER-Client',
  },
];
