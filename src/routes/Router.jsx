import React from 'react';

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import IndividualCard from '../pages/IndividualCard';
import ToggleTheme from '../components/ToggleTheme';

const Router = () => {
  return (
    <BrowserRouter>
      <ToggleTheme />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<IndividualCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
