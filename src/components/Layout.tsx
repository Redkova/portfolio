import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
