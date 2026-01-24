import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeSections = () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    observeSections();
    const timeoutId = setTimeout(observeSections, 500);

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>&lt;Dev/&gt;</span>
        </div>

        <button 
          className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <button 
            onClick={() => scrollToSection('hero')}
            className={activeSection === 'hero' ? styles.activeLink : ''}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? styles.activeLink : ''}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? styles.activeLink : ''}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className={activeSection === 'experience' ? styles.activeLink : ''}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? styles.activeLink : ''}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? styles.activeLink : ''}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
