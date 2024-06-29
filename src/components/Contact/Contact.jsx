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
        <a href='mailto:zaimfadzly@gmail.com' target="_blank" rel="noopener noreferrer"><span>zaimfadzly@gmail.com</span></a>
      </li> 
      <li className={styles.link}>
        <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedinIcon" />
        <a href='https://www.linkedin.com/in/za-im-fadzly-2a6691262/' target="_blank" rel="noopener noreferrer"><span>Za'im Fadzly</span></a>
      </li> 
      <li className={styles.link}>
        <img src={getImageUrl('contact/githubIcon.png')} alt="githubIcon" />
        <a href='https://github.com/zaim860' target="_blank" rel="noopener noreferrer"><span>https://github.com/zaim860</span></a>
      </li> 


      </ul>
    </footer>
  )
}

 
