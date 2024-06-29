import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Click on my email to contact me.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="emailicon" />
          <a href='mailto:zaimfadzly@gmail.com'>zaimfadzly@gmail.com</a>
        </li> 
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedinIcon" />
          <a href='https://www.linkedin.com/in/za-im-fadzly-2a6691262/'>https://www.linkedin.com/in/za-im-fadzly-2a6691262/</a>
        </li> 
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="githubIcon" />
          <a href='https://github.com/zaim860'>https://github.com/zaim860</a>
        </li> 
      </ul>
    </footer>
  )
}

 
