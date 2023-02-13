import React from 'react';

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import IndividualCard from '../pages/IndividualCard';
import ToggleTheme from '../components/ToggleTheme';
import { CreateContext } from '../context/CreateContext';

const Router = () => {
  const context = useContext(CreateContext);
  return (
    <BrowserRouter>
      <ToggleTheme />
      <Header search={context.search} setSearch={context.setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<IndividualCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
