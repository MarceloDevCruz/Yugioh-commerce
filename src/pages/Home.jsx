import React from 'react';
import api from '../config/api';
import axios from 'axios';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';

import Card from '../components/Card';
import Pagination from '../components/Pagination';

import { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState('');
  const [offSet, setOffSet] = useState(0);

  // Variáveis de paginação
  const limite = 70;
  const total = data.length;

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(offSet);

  return (
    <div className="home">
      <h1 className="home__title">Yugioh card Shop</h1>
      {data && (
        <>
          <div className="home__card">
            {!data
              ? 'Carregando'
              : data
                  .filter((card, i) => offSet + i < offSet + limite)
                  .map((card, i) => <Card card={card} key={card.id} />)}
          </div>
          {data && (
            <Pagination
              limite={limite}
              total={total}
              offSet={offSet}
              setOffSet={setOffSet}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
