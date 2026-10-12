import './Navigation.scss';
import { NavLink } from 'react-router';

function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `nav__link ${isActive ? 'nav__link--active' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `nav__link ${isActive ? 'nav__link--active' : ''}`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          `nav__link ${isActive ? 'nav__link--active' : ''}`
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
