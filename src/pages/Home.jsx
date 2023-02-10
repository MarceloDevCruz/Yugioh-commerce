import React, { useContext, useEffect } from 'react';

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { CreateContext } from '../context/CreateContext';

const Home = () => {
  const context = useContext(CreateContext);

  return (
    <div className={context.theme === 'dark' ? 'home dark__home' : 'home'}>
      <h1
        className={
          context.theme === 'dark'
            ? 'home__title dark__home__title'
            : 'home__title'
        }
      >
        Yugioh card Shop
      </h1>
      {context.data ? (
        <>
          <Pagination />
          <div className="home__card">
            {context.data
              .filter(
                (card, i) =>
                  i > context.offSet && i < context.offSet + context.limite
              )
              .map((card) => (
                <Card card={card} key={card.id} />
              ))}
          </div>
          <Pagination />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
