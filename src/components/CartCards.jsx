import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';
import { toIndividualCard } from '../utils/navigate';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
import { CreateContext } from '../context/CreateContext';

const CartCards = ({ card }) => {
  const context = useContext(CreateContext);
  const navigate = useNavigate();

  return (
    <div className="cart__card">
      <img
        className="cart__img"
        src={card.card_images[0].image_url_small}
        alt={card.name}
        onClick={() => toIndividualCard(navigate, card.id)}
      />
      <div className="cart__information">
        <h4 className="cart__name">{card.name}</h4>
        <h3 className="cart__price">
          {dolarsToBrazilianReal(card.card_prices[0].ebay_price)}
        </h3>
        <div className="cart__buttons">
          <BsFillPlusCircleFill
            className="cart__buttons-add"
            onClick={() => context.addToCart(card)}
          />
          <h5 className="cart__buttons-qtd">{card.qtd}</h5>
          <BsFillDashCircleFill
            className="cart__buttons-remove"
            onClick={() => context.removeToCart(card)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCards;
