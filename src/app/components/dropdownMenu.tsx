'use-client';

import React, { useEffect, useState } from 'react';
import styles from './dropdownMenu.module.css';

import cross from '../../../public/menu_close.svg';
import Image from 'next/image';

interface IDropdownMenuProps {
  onClose: () => void;
  menuOpened: boolean;
}

export const DropdownMenu = ({ onClose, menuOpened }: IDropdownMenuProps) => {
  const [menuAnimationStyle, setMenuAnimationStyle] = useState(
    styles.menu_close,
  );

  console.log(menuAnimationStyle);
  useEffect(() => {
    setMenuAnimationStyle(menuOpened ? styles.menu_open : styles.menu_close);
  }, [menuOpened]);

  return (
    <div className={`${styles.menu} ${menuAnimationStyle}`}>
      <button type="button" onClick={onClose} className={styles.closeButton}>
        <Image src={cross} width={20} height={20} alt="Хрестик" />
      </button>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a>Про нас</a>
        </li>
        <a></a>
        <li className={styles.listItem}>Послуги</li>
        <a></a>
        <li className={styles.listItem}>Контакти</li>
      </ul>
      <ul className={styles.phones}>
        <li className={styles.phone}>
          <a>+38 067 487 7203</a>
        </li>
        <li className={styles.phone}>
          <a>+38 096 795 0793</a>
        </li>
      </ul>
    </div>
  );
};
