import { motion } from 'framer-motion';
import * as s from './styles.css';

const IntroSection = () => {
  return (
    <motion.section
      className={s.wrapper}
      id="about"
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={s.titleWrapper}>
        <h1 className={s.title}>안녕하세요</h1>
        <h1 className={s.subTitle}>
          프론트엔드 개발자 <span className={s.name}>남다은</span>입니다.
        </h1>
        <p className={s.description}>
          {`
            집중할 땐 깊이 몰입하고, 맡은 일은 끝까지 책임집니다.
            사용자 경험과 개발자 경험을 모두 고려하며, 주어진 목표를 성과로 연결하는 과정을 즐깁니다.
        `}
        </p>
      </div>
    </motion.section>
  );
};

export default IntroSection;
