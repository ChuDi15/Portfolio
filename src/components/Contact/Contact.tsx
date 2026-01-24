import { useEffect, useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'DanielD2011@outlook.com'
        },
        publicKey
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section 
      id="contact" 
      className={`${styles.contact} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Let's discuss our
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            

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
            <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={formStatus === 'sending'}
              >
                <span>
                  {formStatus === 'sending' ? 'Sending...' : 
                   formStatus === 'success' ? 'Message Sent!' : 
                   formStatus === 'error' ? 'Error - Try Again' : 
                   'Send Message'}
                </span>
                <span className={styles.btnIcon}>
                  {formStatus === 'success' ? '✓' : '✉️'}
                </span>
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
