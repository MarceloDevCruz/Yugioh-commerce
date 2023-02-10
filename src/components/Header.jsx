import React, { useContext, useState } from 'react';
import { BsSearch, BsCart, BsFillCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import Cart from './Cart';
import logo from '../assets/img/Logo.svg';
import { homePage } from '../utils/navigate';
import { CreateContext } from '../context/CreateContext';

const Header = () => {
  const navigate = useNavigate();
  const context = useContext(CreateContext);

  const [showCard, setShowCard] = useState(false);
  const handleShowCard = () => {
    setShowCard(!showCard);
  };

  return (
    <>
      {showCard && <Cart handleShowCard={handleShowCard} />}
      <header
        className={context.theme === 'dark' ? 'header dark__header' : 'header'}
      >
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
            className={
              context.theme === 'dark'
                ? 'header__search-input dark__header__search-input'
                : 'header__search-input'
            }
            placeholder="Procure por card..."
          />
          <button className="btn-search">
            <BsSearch className="btn-search__icon" />
          </button>
        </form>
        <div className="header__card">
          <p className="header__card-text">Seu carrinho</p>
          <div className="header__card-container" onClick={handleShowCard}>
            <BsCart className="header__card-container__cart" />
            <BsFillCircleFill className="header__card-container__ball" />
            <p className="header__card-container__lenght">{context.qtd}</p>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
