import React, { useContext, useEffect, useRef } from 'react';
import CartCards from './CartCards';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';
import { toIndividualCard } from '../utils/navigate';

import { CreateContext } from '../context/CreateContext';

const Cart = ({ handleShowCard }) => {
  const context = useContext(CreateContext);

  let cartRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!cartRef.current.contains(e.target)) handleShowCard();
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div
      className={context.theme === 'dark' ? 'cart dark__cart' : 'cart'}
      ref={cartRef}
    >
      {context.cart.length !== 0 ? (
        <>
          <h2 className="cart__total">Total: R${context.totalPrice}</h2>
          {context.cart.length &&
            context.cart.map((card) => <CartCards card={card} key={card.id} />)}
          <button className="btn btn--tertiary cart__btn">
            Finalizar Compra
          </button>
        </>
      ) : (
        <p className="cart__noContent">Você ainda não tem items no carrinho</p>
      )}
    </div>
  );
};

export default Cart;
