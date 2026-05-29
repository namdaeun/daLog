import { type Variants, motion } from 'framer-motion';
import { REVIEWS } from '~/constants/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import * as s from './styles.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ReviewSection = () => {
  return (
    <section className={s.wrapper} id="review">
      <motion.div
        className={s.reviewListLayout}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-200px 0px' }}
      >
        {REVIEWS.map((review) => (
          <ReviewItem key={review.id} review={review} variants={itemVariants} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection;
