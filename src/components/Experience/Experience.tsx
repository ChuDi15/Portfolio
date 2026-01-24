import { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.scss';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      title: 'Software Developer - Junior Advanced',
      company: 'Globant (at Iberia Tech)',
      period: 'Aug 2025 - Present',
      description: [
        'Development of operator applications using React and Angular, adapting to specific technology stacks',
        'Improvement and maintenance of backend services with Nest.js and Java',
        'Strong emphasis on unit test coverage and integration testing with Cypress',
        'Complete development and deployment of applications, including AWS monitoring',
        'Rapid promotion to Junior Advanced due to consistent delivery and best practices'
      ],
      technologies: ['React', 'Angular', 'Nest.js', 'Java', 'TypeScript', 'Cypress', 'AWS']
    },
    {
      title: 'Software Developer',
      company: 'Globant',
      period: 'Sep 2024 - Present · 1 year 5 months',
      description: [
        'Working at Iberia, learning new technologies such as Angular, Tailwind, Node.js, and Cypress',
        'Focused on clean code practices, refactoring legacy code and improving project quality',
        'Adding new functionalities and comprehensive unit testing coverage',
        'Developed full-stack curiosity, learning Nest.js and understanding project infrastructure',
        'Mastered E2E testing with Cypress.io and deployment workflows management'
      ],
      technologies: ['Angular', 'React', 'Vite', 'Tailwind', 'Node.js', 'Nest.js', 'Cypress', 'TypeScript']
    },
    {
      title: 'Front-end Developer',
      company: 'Solera España',
      period: 'Oct 2022 - Oct 2023 · 1 year 1 month',
      description: [
        'Worked on private insurance application with Finland-based team',
        'Frontend development using React with Redux for state management',
        'Implemented UI components with SASS for styling',
        'Collaborated in agile environment with international team',
        'Code quality assurance with SonarQube'
      ],
      technologies: ['React', 'Redux', 'SASS', 'SonarQube', 'JavaScript', 'Git']
    },
    {
      title: 'Full-stack Web Developer',
      company: 'SITELICON ECOMMERCE SERVICES',
      period: 'Mar 2022 - Jun 2022 · 4 months',
      description: [
        'Internship position (FCT - Higher Degree)',
        'Full-stack development with PHP and JavaScript',
        'E-commerce platform development and maintenance',
        'Learned professional development workflows and best practices',
        'Remote collaboration with development team'
      ],
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Git']
    }
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
      id="experience" 
      className={`${styles.experience} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Professional Experience</h2>
        <p className={styles.subtitle}>My journey as a software developer</p>

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
