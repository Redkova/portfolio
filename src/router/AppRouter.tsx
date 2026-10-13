import { Routes, Route } from 'react-router';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Portfolio from '../pages/Portfolio';
import Contacts from '../pages/Contacts';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
