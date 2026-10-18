import './NotFound.scss';
import { Link } from 'react-router';

function NotFound() {
  return (
    <section className="not-found section">
      <h1 className="not-found__title">Oops! Something went wrong</h1>
      <Link to="/" className="button button--primary">
        {' '}
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
