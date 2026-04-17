import Link from 'next/link';
import Image from 'next/image';
import { CamperListItem } from '@/types/camper';
import { IoLocationOutline } from 'react-icons/io5';
import { BsFuelPump } from 'react-icons/bs';
import { CgHomeAlt } from 'react-icons/cg';
import { TbManualGearbox } from 'react-icons/tb';
import { AiFillStar } from 'react-icons/ai';
import styles from './CamperCard.module.css';

interface Props {
  camper: CamperListItem;
}

export default function CamperCard({ camper }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={290}
        height={310}
        className={styles.image}
        priority
      />
      <div className={styles.info}>
        <div className={styles.top}>
          <h2 className={styles.name}>{camper.name}</h2>
          <span className={styles.price}>€{camper.price}</span>
        </div>

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

        <ul className={styles.amenities}>
          <li>
            <BsFuelPump />
            {camper.engine}
          </li>
          <li>
            <TbManualGearbox />
            {camper.transmission}
          </li>

          <li>
            <CgHomeAlt />
            {camper.form.replace('_', ' ')}
          </li>
        </ul>

        <Link href={`/catalog/${camper.id}`} target="_blank" className={styles.btn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
