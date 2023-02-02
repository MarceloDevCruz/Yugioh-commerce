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

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Variáveis de paginação

  const limite = 70;
  const total = data.length;

  //

  return (
    <div className="home">
      <h1 className="home__title">Yugioh card Shop</h1>
      {data && (
        <>
          <div className="home__card">
            {data.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
          <Pagination
            limite={70}
            total={data.length}
            offset={offSet}
            setOffSet={setOffSet}
          />
        </>
      )}
    </div>
  );
};

export default Home;
