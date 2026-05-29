import type { MetaFunction } from '@remix-run/node';
import { motion, useScroll } from 'framer-motion';
import ExperienceSection from '~/views/AboutPage/components/ExperienceSection/ExperienceSection';
import IntroSection from '~/views/AboutPage/components/IntroSection/IntroSection';
import ProjectSection from '~/views/AboutPage/components/ProjectSection/ProjectSection';
import ReviewSection from '~/views/AboutPage/components/ReviewSection/ReviewSection';
import * as S from './index.css';

export const meta: MetaFunction = () => {
  return [{ title: 'diary' }, { name: 'description', content: '다이어리' }];
};

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={S.pageWrapper}>
      <div className={S.progressRail} aria-hidden>
        <motion.div className={S.progressLine} style={{ scaleY: scrollYProgress }} />
      </div>
      <IntroSection />
      <ProjectSection />
      <ExperienceSection />
      <ReviewSection />
    </div>
  );
};

export default About;
