import React from 'react';
import { Route, Routes } from 'react-router-dom';

import css from './app.module.css';
import { Header } from 'components';
import { Home, Cart, NotFound } from 'pages';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
