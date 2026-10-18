import { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from './footer/Footer';
import Header from './header/Header';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
}

function Layout() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
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
