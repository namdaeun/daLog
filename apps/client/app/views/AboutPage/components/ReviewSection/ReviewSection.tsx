import { motion } from 'framer-motion';
import { REVIEWS } from '~/constants/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import * as s from './styles.css';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
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
          <ReviewItem key={review.id} review={review} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection;
