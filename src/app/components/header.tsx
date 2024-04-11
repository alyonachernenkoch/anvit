'use client';

import React, { useState } from 'react';
import styles from './header.module.css';

import burger from '../../../public/burger.svg';
import Image from 'next/image';
import { DropdownMenu } from './dropdownMenu';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  console.log({menuOpened})

  const handleMenuButtonClick = () => {
    setMenuOpened(true);
  };

  const handleCloseMenu = () => {
    setMenuOpened(false);
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.button}>Запис онлайн</button>
        <button
          className={styles.menu_button}
          onClick={handleMenuButtonClick}
          type={'button'}
        >
          <Image src={burger} alt="Burger Menu" width={40} height={40} />
        </button>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li className={styles.menu_item}>
              <a className={styles.menu_item_link} href="#about">
                Про нас
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.menu_item_link} href="#services">
                Послуги
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.menu_item_link} href="#footer">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <ul className={styles.phones}>
          <li className={styles.phone}>
            <a className={styles.phone_link} href="tel:+380674877203">
              +38 067 487 72 03 
            </a>
          </li>
          <li className={styles.phone}>
            <a className={styles.phone_link} href="tel:+380967950793">
              +38 096 795 0793
            </a>
          </li>
        </ul>
      </header>
      <DropdownMenu onClose={handleCloseMenu} menuOpened={menuOpened} />
    </>
  );
};
