import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = getImageUrl("about/Testimonial for Zaim.pdf"); // Make sure the PDF path is correct
    link.download = 'Testimonial for Zaim.pdf';
    link.click();
  };

  return ( 
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}> 
        <img 
          src={getImageUrl("about/zaimfaceabt.png")}
          alt="aboutface"  
          className={styles.aboutImage}
        /> 
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Developer</h3>
              <p>I'm a student aspiring to be a full-stack programmer/developer
                using mainly JavaScript with its libraries</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>A Technical Person</h3>
              <p>I have a natural aptitude for programming and technical problem-solving. While I appreciate creativity, my strengths lie 
                in analytical thinking, coding, and technical execution</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>Simple UI Designer</h3>
              <p>Despite not being the most creative person I have created simple enough UI/UX designs that
                are simple and easy to use.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection} id="testimonials">
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.testimonialContent}>
          <img 
            src={getImageUrl("about/testimonial.png")}
            alt="testimonial"
            className={styles.testimonialImage}
          />
          <button className={styles.downloadButton} onClick={handleDownload}>
            Download Testimonial 
          </button>
        </div>
      </section>
    </section>
  );
};
