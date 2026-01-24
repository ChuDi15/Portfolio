import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
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
      id="contact" 
      className={`${styles.contact} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Let's discuss your next project or opportunity
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>📧</div>
              <h3 className={styles.cardTitle}>Email</h3>
              <p className={styles.cardText}>DanielD2011@outlook.com</p>
              <a href="DanielD2011@outlook.com" className={styles.cardLink}>
                Send a message →
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>💼</div>
              <h3 className={styles.cardTitle}>LinkedIn</h3>
              <p className={styles.cardText}>Connect with me</p>
              <a href="https://www.linkedin.com/in/daniel-ben%C3%ADtez-abell%C3%A1n-10108a106/" className={styles.cardLink}>
                View profile →
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>💻</div>
              <h3 className={styles.cardTitle}>GitHub</h3>
              <p className={styles.cardText}>Check out my code</p>
              <a href="#" className={styles.cardLink}>
                View repositories →
              </a>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={styles.input}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  rows={5}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <span className={styles.btnIcon}>✉️</span>
              </button>
            </form>

            <div className={styles.availability}>
              <div className={styles.statusIndicator}>
                <div className={styles.pulse}></div>
                <span>Available for freelance opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
