import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import css from './app.module.css';
import { Header } from 'components';
import { Home, Cart } from 'pages';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
