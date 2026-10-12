import './Header.scss';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Navigation from '../navigation/Navigation';

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
