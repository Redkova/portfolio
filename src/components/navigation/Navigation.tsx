import './Navigation.scss';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `nav__link ${isActive ? 'nav__link--active' : ''}`
        }
      >
        {t('nav.home')}
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `nav__link ${isActive ? 'nav__link--active' : ''}`
        }
      >
        {t('nav.portfolio')}
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          `nav__link ${isActive ? 'nav__link--active' : ''}`
        }
      >
        {t('nav.contacts')}
      </NavLink>
    </nav>
  );
}

export default Navigation;
