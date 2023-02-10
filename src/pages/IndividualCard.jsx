import React, { useState, useEffect, useContext } from 'react';
import { CreateContext } from '../context/CreateContext';
import { useParams } from 'react-router-dom';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';

const IndividualCard = () => {
  const params = useParams();
  const id = Number(params.id);

  const context = useContext(CreateContext);

  const cardDetails = context.data.filter((card) => card.id === id);

  return (
    <div
      className={
        context.theme === 'dark'
          ? 'individualCard dark__individualCard'
          : 'individualCard'
      }
    >
      {context.data &&
        cardDetails.map((card) => (
          <>
            <img
              src={card.card_images[0].image_url}
              alt={card.name}
              className="individualCard__photo"
            />
            <div className="individualCard__details">
              <h2 className="individualCard__details-title">{card.name}</h2>
              <span className="individualCard__details-span--1">
                Descrição:
              </span>
              <h5 className="individualCard__details-description">
                {card.desc}
              </h5>
              <span className="individualCard__details-span--2">Tipo</span>
              <span className="individualCard__details-span--3">Raça</span>
              <p className="individualCard__details-type">{card.type}</p>
              <p className="individualCard__details-race">{card.race}</p>
              <h3 className="individualCard__details-price">
                Preço: R$:
                {dolarsToBrazilianReal(card.card_prices[0].ebay_price)}
              </h3>
              <button
                onClick={() => context.addToCart(card)}
                className="btn btn--tertiary individualCard__details-btn"
              >
                Comprar
              </button>
            </div>
          </>
        ))}
    </div>
  );
};

export default IndividualCard;
