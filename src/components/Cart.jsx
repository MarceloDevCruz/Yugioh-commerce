import React, { useContext } from 'react';
import CartCards from './CartCards';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';
import { toIndividualCard } from '../utils/navigate';

import { CreateContext } from '../context/CreateContext';

const Cart = ({ handleShowCard }) => {
  const context = useContext(CreateContext);

  return (
    <div onClick={handleShowCard} className="cart">
      {context.cart.length &&
        context.cart.map((card) => {
          <CartCards card={card} key={card.id} />;
        })}
    </div>
  );
};

export default Cart;
