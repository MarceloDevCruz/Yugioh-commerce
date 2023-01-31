import React from 'react';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';

const Card = ({ card }) => {
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
