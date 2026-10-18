import { Routes, Route } from 'react-router';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Portfolio from '../pages/portfolio/Portfolio';
import Contacts from '../pages/contacts/Contacts';
import NotFound from '../pages/notFound/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
