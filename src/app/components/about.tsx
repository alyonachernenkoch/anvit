import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';

import daf from '../../../public/anvit_daf_2.jpg';

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.title_container}>
        <Image
          src={daf}
          className={styles.image}
          alt="Блакитна вантажівка DAF"
        />
        <h2 className={styles.title}>Про нас</h2>
      </div>
      <p className={styles.description}>
        Наша компанія заснована у 2013 році.
        <br />
        <span className={styles.description_highlight}>
          Наша ціль - задоволення потреб клієнтів шляхом надання якісних послуг:
        </span>
        <br />- з перевезення вантажів автомобільним транспортом в Україні та за
        її межами; <br />- надання повного спектру послуг у сфері організації
        міжнародних вантажних перевезень, послуги митного оформлення; <br />-
        технічне обслуговування та ремонт автотранспортних засобів; <br />-
        обов'язковий технічний контроль транспортних засобів.
        <br />
        (Акредитація за стандартом ДСТУ EN ISO/IEC 17025:2019).
      </p>
    </section>
  );
};
