import './Header.scss';
import ThemeToggle from '../../themeToggle/ThemeToggle';
import Navigation from '../../navigation/Navigation';
import LanguageSwitch from '../../languageSwitch/LanguageSwitch';

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__controls">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <LanguageSwitch />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
