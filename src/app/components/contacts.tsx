import React from 'react';
import styles from './contacts.module.css';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Контакти</h2>
      {data.map((item) => (
        <div className={styles.item}>
          <h3 className={styles.item_title}>{item?.title}</h3>
          <p className={styles.item_info}>{item?.info}</p>
        </div>
      ))}
    </div>
  );
};

const data = [
  { title: 'ТОВ "Анвіт Транс"', info: 'Пн-Пт з 09:00 до 18:00' },
  {
    title: 'Телефон',
    info: `0674877203 - Директор, Носик Андрій Миколайович
    0967950793 - Відділ ОТК, Поливач Вячеслав Віталійович`,
  },
  { title: 'Електронна адреса', info: 'admin@anvit.net' },
  {
    title: 'Адреса',
    info: '08141, Київська обл., Бучанський район, с. Святопетрівське, вул. Петропавлівська, 8',
  },
];
