'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { CamperImage } from '@/types/camper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './Gallery.module.css';

interface Props {
  images: CamperImage[];
}

export default function Gallery({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop={images.length > 1}
        spaceBetween={27}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={styles.mainSwiper}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <div className={styles.mainSlide}>
              <Image
                src={image.original}
                alt="camper"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className={styles.mainImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={images.length > 4}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={styles.thumbsSwiper}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <div className={styles.thumbSlide}>
              <Image
                src={image.thumb}
                alt="camper thumb"
                fill
                sizes="150px"
                className={styles.thumbImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
