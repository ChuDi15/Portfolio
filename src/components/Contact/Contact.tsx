import { useEffect, useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Contact.module.scss';

const Contact = () => {
  const { t } = useLanguage();
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
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.subtitle}>
          {t.contact.subtitle}
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>💼</div>
              <h3 className={styles.cardTitle}>{t.contact.info.linkedin.title}</h3>
              <p className={styles.cardText}>{t.contact.info.linkedin.text}</p>
              <a href="https://www.linkedin.com/in/daniel-ben%C3%ADtez-abell%C3%A1n-10108a106/" className={styles.cardLink}>
                {t.contact.info.linkedin.link} →
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>💻</div>
              <h3 className={styles.cardTitle}>{t.contact.info.github.title}</h3>
              <p className={styles.cardText}>{t.contact.info.github.text}</p>
              <a href="#" className={styles.cardLink}>
                {t.contact.info.github.link} →
              </a>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {t.contact.form.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder={t.contact.form.name.placeholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t.contact.form.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder={t.contact.form.email.placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  {t.contact.form.subject.label}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  placeholder={t.contact.form.subject.placeholder}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  {t.contact.form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  rows={5}
                  placeholder={t.contact.form.message.placeholder}
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
                  {formStatus === 'sending' ? t.contact.form.sending : 
                   formStatus === 'success' ? t.contact.form.success : 
                   formStatus === 'error' ? t.contact.form.error : 
                   t.contact.form.submit}
                </span>
                <span className={styles.btnIcon}>
                  {formStatus === 'success' ? '✓' : '✉️'}
                </span>
              </button>
            </form>

            <div className={styles.availability}>
              <div className={styles.statusIndicator}>
                <div className={styles.pulse}></div>
                <span>{t.contact.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
