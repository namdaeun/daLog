import { motion } from 'framer-motion';
import { EXPERIENCES } from '~/constants/experiences';
import { listVariants, sectionVariants } from '~/styles/motion';
import ExperienceItem from '~/views/AboutPage/components/ExperienceItem/ExperienceItem';
import * as s from './styles.css';

const ExperienceSection = () => {
  return (
    <motion.section
      className={s.wrapper}
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className={s.container}>
        <motion.div className={s.experienceList} variants={listVariants}>
          {EXPERIENCES.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
