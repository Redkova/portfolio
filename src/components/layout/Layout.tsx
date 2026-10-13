import { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from './footer/Footer';
import Header from './header/Header';

function Layout() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
