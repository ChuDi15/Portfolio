import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Skills.module.scss';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const Skills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'React', category: t.skills.categories.Frontend, icon: '⚛️' },
    { name: 'Angular', category: t.skills.categories.Frontend, icon: '🅰️' },
    { name: 'TypeScript', category: t.skills.categories.Language, icon: '📘' },
    { name: 'JavaScript', category: t.skills.categories.Language, icon: '📜' },
    { name: 'Nest.js', category: t.skills.categories.Backend, icon: '🦅' },
    { name: 'Node.js', category: t.skills.categories.Backend, icon: '🟢' },
    { name: 'CSS/SCSS', category: t.skills.categories.Frontend, icon: '🎨' },
    { name: 'HTML5', category: t.skills.categories.Frontend, icon: '🌐' },
    { name: 'AWS', category: t.skills.categories.Cloud, icon: '☁️' },
    { name: 'Java', category: t.skills.categories.Backend, icon: '☕' },
    { name: 'Cypress', category: t.skills.categories.Testing, icon: '🧪' },
    { name: 'Git', category: t.skills.categories.Tools, icon: '📦' },
    { name: 'Scrum', category: t.skills.categories.Methodology, icon: '🔄' },
    { name: 'REST API', category: t.skills.categories.Backend, icon: '🔌' },
    { name: 'Docker', category: t.skills.categories.DevOps, icon: '🐳' },
  ];

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
      id="skills" 
      className={`${styles.skills} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t.skills.title}</h2>
        <p className={styles.subtitle}>
          {t.skills.subtitle}
        </p>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardInner}>
                <div className={styles.icon}>{skill.icon}</div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.category}>{skill.category}</span>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.expertise}>
          <h3 className={styles.expertiseTitle}>{t.skills.expertise.title}</h3>
          <div className={styles.expertiseList}>
            {t.skills.expertise.items.map((item, index) => (
              <div key={index} className={styles.expertiseItem}>
                <div className={styles.expertiseIcon}>
                  {index === 0 && '💻'}
                  {index === 1 && '⚙️'}
                  {index === 2 && '🚀'}
                  {index === 3 && '🎯'}
                </div>
                <div className={styles.expertiseContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
