import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';

import daf from '../../../public/hero_daf.jpg';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image_wrapper}>
        <Image alt="DAF" src={daf} className={styles.image}></Image>
      </div>
      <div className={styles.info}>
        <p className={styles.subtitle}>ТОВ</p>
        <h1 className={styles.title}>«Анвіт Транс»</h1>
        <div className={styles.divider}></div>
        <div className={styles.info_bottom_divider}></div>
      </div>
    </section>
  );
};
