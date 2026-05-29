import { motion } from 'framer-motion';
import { itemVariants } from '~/styles/motion';
import type { Experience } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { logoUrl, company, position, description, startDate, endDate } =
    experience;

  return (
    <motion.article
      className={s.wrapper}
      variants={itemVariants}
      key={experience.id}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={logoUrl} alt={company} className={s.logo} />
      <div className={s.contentLayout}>
        <div className={s.titleLayout}>
          <h1 className={s.position}>{position}</h1>
          <p className={s.date}>
            {startDate} - {endDate}
          </p>
        </div>
        <ul className={s.descriptionList}>
          {description.map((item) => (
            <li key={item} className={s.description}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceItem;
