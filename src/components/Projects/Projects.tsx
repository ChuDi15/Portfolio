import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.scss';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: 'Operator Management System',
      description: 'Complete web application for Iberia operators with real-time data synchronization, built with React and integrated with backend services.',
      technologies: ['React', 'TypeScript', 'REST API'],
      category: 'Web App'
    },
    {
      title: 'Flight Tracking Dashboard',
      description: 'Real-time flight monitoring dashboard with interactive data visualization and alert systems for aviation operations.',
      technologies: ['Angular', 'RxJS', 'PrimeNG', 'WebSocket'],
      category: 'Dashboard'
    },
    {
      title: 'Microservices API Gateway',
      description: 'Scalable API gateway built with Nest.js for handling multiple microservices, with authentication and rate limiting.',
      technologies: ['Nest.js', 'Node.js', 'PostgreSQL', 'Docker'],
      category: 'Backend'
    },
    {
      title: 'Deployment Automation Tool',
      description: 'Custom deployment pipeline tool for AWS infrastructure with monitoring and rollback capabilities.',
      technologies: ['AWS', 'Lambda', 'CloudFormation', 'Node.js'],
      category: 'DevOps'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Nest.js', 'MongoDB', 'Stripe'],
      category: 'Web App'
    }
  ];

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
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of projects showcasing my technical expertise
        </p>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
                  <span>View Details</span>
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
