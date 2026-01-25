import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './About.module.scss';
import avatarImage from '../../assets/avatar.jpg';

const About = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const createMarkup = (html: string) => {
    return { __html: html.replace(/class=/g, 'className=') };
  };

  return (
    <section 
      id="about" 
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t.about.title}</h2>

        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <img 
                  src={avatarImage} 
                  alt="Profile" 
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.imageDecoration}></div>
            </div>
          </div>

          <div className={styles.text}>
            <div className={styles.intro}>
              <h3 className={styles.subtitle}>{t.about.subtitle}</h3>
              {t.about.description.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={styles.description}
                  dangerouslySetInnerHTML={createMarkup(paragraph)}
                />
              ))}
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>{t.about.stats.experience}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>{t.about.stats.projects}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>{t.about.stats.technologies}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
