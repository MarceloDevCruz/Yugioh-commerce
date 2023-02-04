import React, { useState } from 'react';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';

import IndividualCard from '../pages/IndividualCard';

const Card = ({ card }) => {
  const [clickCard, setClickCard] = useState(false);

  return (
    <div className="card">
      <img
        className="card__img"
        src={card.card_images[0].image_url_small}
        alt={card.name}
      />
      <h4 className="card__name">{card.name}</h4>
      <h3 className="card__price">
        Preço: R$:{dolarsToBrazilianReal(card.card_prices[0].cardmarket_price)}
      </h3>
      <button className="btn btn--tertiary">Comprar</button>
    </div>
  );
};

export default Card;
