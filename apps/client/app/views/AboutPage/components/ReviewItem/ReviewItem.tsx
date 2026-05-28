import { type Variants, motion } from 'framer-motion';
import { maskName } from '~/utils/maskName';
import type { Review } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ReviewItemProps {
  review: Review;
}

const reviewVariants: Variants = {
  hidden: { y: 30 },
  visible: { y: 0 },
};

const ReviewItem = ({ review }: ReviewItemProps) => {
  const { name, info, description } = review;

  return (
    <motion.article className={s.wrapper} variants={reviewVariants}>
      <p className={s.description}>{description}</p>
      <div className={s.infoLayout}>
        <h1 className={s.name}>{maskName(name)}</h1>
        <span className={s.info}>{info}</span>
      </div>
    </motion.article>
  );
};

export default ReviewItem;
