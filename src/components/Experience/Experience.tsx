import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Experience.module.scss';

const Experience = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = t.experience.items;

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

  return (
    <section 
      id="experience" 
      className={`${styles.experience} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t.experience.title}</h2>
        <p className={styles.subtitle}>{t.experience.subtitle}</p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineDot}>
                <div className={styles.dotInner}></div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    <h3>{exp.title}</h3>
                    <div className={styles.company}>
                      <span className={styles.companyIcon}>🏢</span>
                      {exp.company}
                    </div>
                  </div>
                  <div className={styles.period}>
                    <span className={styles.periodIcon}>📅</span>
                    {exp.period}
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <ul className={styles.descriptionList}>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className={styles.technologies}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
