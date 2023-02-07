import React, { useContext, useEffect } from 'react';

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { CreateContext } from '../context/CreateContext';

const Home = () => {
  const context = useContext(CreateContext);
  console.log(context.porPagina);

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
