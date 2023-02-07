import React from 'react';
import { BsSearch, BsCart, BsFillCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import logo from '../assets/img/Logo.svg';
import { homePage } from '../utils/navigate';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            src={logo}
            alt="Yugioh logo"
            className="header__logo-img"
            onClick={() => homePage(navigate)}
          />
        </div>
        <form className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="Procure por card..."
          />
          <button className="btn-search">
            <BsSearch className="btn-search__icon" />
          </button>
        </form>
        <div className="header__card">
          <p className="header__card-text">Seu carrinho</p>
          <div className="header__card-container">
            <BsCart className="header__card-container__cart" />
            <BsFillCircleFill className="header__card-container__ball" />
            <p className="header__card-container__lenght">10</p>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
