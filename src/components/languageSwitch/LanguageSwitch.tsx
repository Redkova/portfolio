import './LanguageSwitch.scss';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation();

  return (
    <div className="language-switch" aria-label="Choose language">
      <button
        type="button"
        className={`language-switch__button ${i18n.resolvedLanguage === 'en' ? 'language-switch__button--active' : ''}`}
        onClick={() => void i18n.changeLanguage('en')}
        aria-pressed={i18n.resolvedLanguage === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={`language-switch__button ${i18n.resolvedLanguage === 'sv' ? 'language-switch__button--active' : ''}`}
        onClick={() => void i18n.changeLanguage('sv')}
        aria-pressed={i18n.resolvedLanguage === 'sv'}
      >
        SV
      </button>
    </div>
  );
}

export default LanguageSwitch;
