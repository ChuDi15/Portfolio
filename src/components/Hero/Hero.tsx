import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.grid}></div>
        <div className={styles.gradient}></div>
      </div>

      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hello, I'm Daniel Benitez Abellan
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.name}>Software Developer</span>
          </h1>

          <div className={styles.typewriter}>
            <span className={styles.typed}>React | Angular | Nest.js | TypeScript</span>
          </div>

          <p className={styles.description}>
            Passionate full-stack developer specializing in modern web technologies.
            Building scalable applications with clean code and best practices.
          </p>

          <div className={styles.cta}>
            <button className={styles.btnPrimary} onClick={scrollToContact}>
              Get In Touch
            </button>
            <button 
              className={styles.btnOutline}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.codeSnippet}>
              <div className={styles.codeLine}>
                <span className={styles.keyword}>const</span>
                <span className={styles.variable}> developer</span>
                <span> = {'{'}</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>  name:</span>
                <span className={styles.string}> 'Software Dev'</span>,
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>  skills:</span>
                <span> [</span>
                <span className={styles.string}>'React'</span>,
                <span className={styles.string}> 'Angular'</span>
                <span>],</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>  passion:</span>
                <span className={styles.string}> 'Coding'</span>
              </div>
              <div className={styles.codeLine}>
                <span>{'}'}</span>
              </div>
            </div>
          </div>

          <div className={styles.shapes}>
            <div className={`${styles.shape} ${styles.shape1}`}></div>
            <div className={`${styles.shape} ${styles.shape2}`}></div>
            <div className={`${styles.shape} ${styles.shape3}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
