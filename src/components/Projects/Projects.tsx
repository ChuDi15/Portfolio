import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Projects.module.scss';

const Projects = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const projects = t.projects.items;

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
      id="projects" 
      className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t.projects.title}</h2>
        <p className={styles.subtitle}>
          {t.projects.subtitle}
        </p>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all'
                ? t.projects.categories.all
                : (category in t.projects.categories
                  ? t.projects.categories[category as keyof typeof t.projects.categories]
                  : category)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  {project.category === 'Web App' && '🌐'}
                  {project.category === 'Dashboard' && '📊'}
                  {project.category === 'Backend' && '⚙️'}
                  {project.category === 'DevOps' && '🚀'}
                  {project.category === 'Library' && '📚'}
                </div>
                <span className={styles.category}>{project.category}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.btnLink}>
                  <span>{t.projects.viewDetails}</span>
                  <span className={styles.arrow}>→</span>
                </button>
              </div>

              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
