import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.scss';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Angular', category: 'Frontend', icon: '🅰️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'JavaScript', category: 'Language', icon: '📜' },
    { name: 'Nest.js', category: 'Backend', icon: '🦅' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'CSS/SCSS', category: 'Frontend', icon: '🎨' },
    { name: 'HTML5', category: 'Frontend', icon: '🌐' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Java', category: 'Backend', icon: '☕' },
    { name: 'Cypress', category: 'Testing', icon: '🧪' },
    { name: 'Git', category: 'Tools', icon: '📦' },
    { name: 'Scrum', category: 'Methodology', icon: '🔄' },
    { name: 'REST API', category: 'Backend', icon: '🔌' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
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
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>
          Technologies and tools I use to bring ideas to life
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
          <h3 className={styles.expertiseTitle}>Core Competencies</h3>
          <div className={styles.expertiseList}>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>💻</div>
              <div className={styles.expertiseContent}>
                <h4>Frontend Development</h4>
                <p>Building responsive and interactive user interfaces with React and Angular</p>
              </div>
            </div>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>⚙️</div>
              <div className={styles.expertiseContent}>
                <h4>Backend Development</h4>
                <p>Creating scalable APIs and services with Nest.js and Java</p>
              </div>
            </div>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>🚀</div>
              <div className={styles.expertiseContent}>
                <h4>DevOps & Deployment</h4>
                <p>Managing CI/CD pipelines and cloud infrastructure on AWS</p>
              </div>
            </div>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>🎯</div>
              <div className={styles.expertiseContent}>
                <h4>Agile Methodologies</h4>
                <p>Working with Scrum framework and best development practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
