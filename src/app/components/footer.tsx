import React from 'react';
import styles from './footer.module.css';
import { Contacts } from './contacts';

export const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <Contacts />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2543.3196606130023!2d30.302915076554154!3d50.39787997158222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDIzJzUyLjQiTiAzMMKwMTgnMTkuOCJF!5e0!3m2!1sru!2sua!4v1712089619159!5m2!1sru!2sua"
        width="100%"
        height="450"
        loading="lazy"
        style={{border: 0}}
      ></iframe>
    </footer>
  );
};
