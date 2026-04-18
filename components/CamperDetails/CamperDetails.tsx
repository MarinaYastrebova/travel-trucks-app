import { CamperDetails as CamperDetailsType, ReviewType } from '@/types/camper';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import Gallery from '@/components/Gallery/Gallery';
import Reviews from '@/components/Reviews/Reviews';
import BookingForm from '@/components/BookingForm/BookingForm';
import styles from './CamperDetails.module.css';

interface Props {
  camper: CamperDetailsType;
  reviews: ReviewType[];
}

export default function CamperDetails({ camper, reviews }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Gallery images={camper.gallery} />

        <div className={styles.heroInfo}>
          <div className={styles.heroInfoTop}>
            <h1 className={styles.name}>{camper.name}</h1>
            <div className={styles.meta}>
              <span className={styles.rating}>
                <AiFillStar color="#FFC531" />
                {camper.rating} ({camper.totalReviews} Reviews)
              </span>
              <span className={styles.location}>
                <IoLocationOutline />
                {camper.location}
              </span>
            </div>
            <span className={styles.price}>€{camper.price}</span>
            <p className={styles.description}>{camper.description}</p>
          </div>

          <div className={styles.heroInfoBottom}>
            <h2 className={styles.detailsTitle}>Vehicle details</h2>
            <div className={styles.details}>
              <ul className={styles.amenities}>
                <li>{camper.transmission}</li>
                <li>{camper.engine}</li>
                {camper.amenities.map(a => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <hr className={styles.divider} />
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td>Form</td>
                    <td>{camper.form}</td>
                  </tr>
                  <tr>
                    <td>Length</td>
                    <td>{camper.length}</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>{camper.width}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{camper.height}</td>
                  </tr>
                  <tr>
                    <td>Tank</td>
                    <td>{camper.tank}</td>
                  </tr>
                  <tr>
                    <td>Consumption</td>
                    <td>{camper.consumption}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <Reviews reviews={reviews} />
        </div>
        <BookingForm camperId={camper.id} />
      </div>
    </div>
  );
}
