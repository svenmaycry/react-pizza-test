import '../../scss/app.scss';

import { Home } from '../../pages/Home/Home';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Cart } from '../../pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
