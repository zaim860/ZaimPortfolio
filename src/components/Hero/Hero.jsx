import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Za'im</h1>
        <p className={styles.description}>I'm a student currently in ITE aspiring to be a full-stack programmer in the future.</p>
        <div className={styles.buttonContainer}>
          <a className={styles.contactBtn} href='#contact'>Contact Me</a>
          <a className={styles.contactBtn} href='https://www.youtube.com/@brrup9918' target="_blank" rel="noopener noreferrer">Youtube</a>
          <a className={styles.contactBtn} href='/Za%27im_Resume_24.pdf' download="Zaim_Resume_24.pdf">Download CV</a>
        </div>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/dudesface.png")} alt="Hero image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
