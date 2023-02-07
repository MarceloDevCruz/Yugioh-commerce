import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';
import { toIndividualCard } from '../utils/navigate';

import IndividualCard from '../pages/IndividualCard';

const Card = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        className="card__img"
        src={card.card_images[0].image_url_small}
        alt={card.name}
        onClick={() => toIndividualCard(navigate, card.id)}
      />
      <h4 className="card__name">{card.name}</h4>
      <h3 className="card__price">
        Preço: R$:{dolarsToBrazilianReal(card.card_prices[0].ebay_price)}
      </h3>
      <button className="btn btn--tertiary">Comprar</button>
    </div>
  );
};

export default Card;
