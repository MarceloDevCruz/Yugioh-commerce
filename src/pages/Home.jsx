import React, { useContext, useEffect } from 'react';

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { CreateContext } from '../context/CreateContext';

const Home = () => {
  const context = useContext(CreateContext);
  console.log(context.porPagina);

  useEffect(() => {
    for (let i = context.offSet; i < context.offSet + context.limite; i++) {
      context.porPagina.push(context.data[i]);
      if (context.data[i] === undefined) return;
    }
  }, [context.offSet]);

  return (
    <div className="home">
      <h1 className="home__title">Yugioh card Shop</h1>
      <Pagination />
      {context.data && (
        <>
          <div className="home__card">
            {context.data.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Home;
