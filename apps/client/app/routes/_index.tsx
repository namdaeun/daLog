import type { MetaFunction } from '@remix-run/node';
import ExperienceSection from '~/views/AboutPage/components/ExperienceSection/ExperienceSection';
import IntroSection from '~/views/AboutPage/components/IntroSection/IntroSection';
import ProjectSection from '~/views/AboutPage/components/ProjectSection/ProjectSection';
import ReviewSection from '~/views/AboutPage/components/ReviewSection/ReviewSection';
import * as S from './index.css';

export const meta: MetaFunction = () => {
  return [{ title: 'diary' }, { name: 'description', content: '다이어리' }];
};

const About = () => {
  return (
    <div className={S.pageWrapper}>
      <IntroSection />
      <ProjectSection />
      <ExperienceSection />
      <ReviewSection />
    </div>
  );
};

export default About;
