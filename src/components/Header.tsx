import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}

export default Header;
