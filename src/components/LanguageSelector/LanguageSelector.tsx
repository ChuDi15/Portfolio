import { useLanguage } from '../../contexts/LanguageContext';
import styles from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.languageSelector}>
      <button
        className={`${styles.langBtn} ${language === 'es' ? styles.active : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <span className={styles.separator}>/</span>
      <button
        className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Change to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
