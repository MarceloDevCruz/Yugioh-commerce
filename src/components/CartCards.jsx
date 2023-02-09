import React from 'react';
import { useNavigate } from 'react-router-dom';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';
import { toIndividualCard } from '../utils/navigate';

const CartCards = ({ card }) => {
  console.log(card);
  return (
    <div className="cart__card">
      <img
        className="cart__img"
        src={card.card_images[0].image_url_small}
        alt={card.name}
        onClick={() => toIndividualCard(navigate, card.id)}
      />
      <h4 className="cart__name">{card.name}</h4>
      <h3 className="cart__price">
        {dolarsToBrazilianReal(card.card_prices[0].ebay_price)}
      </h3>
    </div>
  );
};

export default CartCards;
