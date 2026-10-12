import './ThemeToggle.scss';
import sunIcon from '../../../assets/sun.svg';
import moonIcon from '../../../assets/moon.svg';

type ThemeToggleProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggleTheme}>
      <img
        className="theme-toggle__icon"
        src={theme === 'dark' ? sunIcon : moonIcon}
        alt=""
      />
    </button>
  );
}

export default ThemeToggle;
