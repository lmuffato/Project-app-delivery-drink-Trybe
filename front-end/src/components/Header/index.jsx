import React from 'react';
import styles from './styles.module.css';

export default function Header() {
  return (
    <nav className={ styles.topnav }>
      <a className={ styles.active } href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </nav>
  );
}
