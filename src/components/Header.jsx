import React from 'react';
import { BsSearch, BsCart, BsFillCircleFill } from 'react-icons/bs';

import logo from '../assets/img/Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Yugioh logo" className="header__logo-img" />
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
  );
};

export default Header;
