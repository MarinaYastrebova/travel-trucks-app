import { ReviewType } from '@/types/camper';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './Reviews.module.css';

interface Props {
  reviews: ReviewType[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(star =>
        star <= rating ? (
          <AiFillStar key={star} color="#FFC531" size={16} />
        ) : (
          <AiOutlineStar key={star} color="#FFC531" size={16} />
        )
      )}
    </div>
  );
}

export default function Reviews({ reviews }: Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titleReviews}>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.avatar}>{review.reviewer_name.charAt(0).toUpperCase()}</div>
            <div>
              <p className={styles.name}>{review.reviewer_name}</p>
              <StarRating rating={review.reviewer_rating} />
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
