import { useEffect, useRef, useState } from 'react';
import styles from './About.module.scss';
import avatarImage from '../../assets/avatar.jpg';

const About = () => {
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

  return (
    <section 
      id="about" 
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

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
              <h3 className={styles.subtitle}>Full-Stack Developer</h3>
              <p className={styles.description}>
                While working for <span className={styles.highlight}>Iberia</span> in the Tech department, 
                I was involved in the development of applications for operators, adapting to the specific 
                technology stack of each application, using both <span className={styles.highlight}>React</span> and <span className={styles.highlight}>Angular</span>.
              </p>
              <p className={styles.description}>
                I also improved and maintained backend services with <span className={styles.highlight}>Nest.js</span> and <span className={styles.highlight}>Java</span>, 
                placing strong emphasis on maintaining high unit test coverage as well as integration tests with Cypress.
              </p>
              <p className={styles.description}>
                I learned about deployment workflows and was responsible for the complete development and 
                deployment of an application for Iberia Tech, overseeing both the implementation and the 
                deployment process, as well as post-deployment data tracing and monitoring on <span className={styles.highlight}>AWS</span>.
              </p>
              <p className={styles.description}>
                This experience helped me mature rapidly as a developer, facing increasingly complex 
                challenges and consistently resolving them with efficiency and best practices. All of this 
                led to a rapid promotion to <span className={styles.highlight}>Junior Advanced</span>.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
