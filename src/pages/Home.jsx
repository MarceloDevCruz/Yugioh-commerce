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

  const test = [];

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  for (let i = offSet; i < offSet + limite; i++) {
    test.push(data[i]);
  }

  return (
    <div className="home">
      <h1 className="home__title">Yugioh card Shop</h1>
      <Pagination
        limite={limite}
        total={total}
        offSet={offSet}
        setOffSet={setOffSet}
      />
      {data && (
        <>
          <div className="home__card">
            {test.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
          <Pagination
            limite={limite}
            total={total}
            offSet={offSet}
            setOffSet={setOffSet}
          />
        </>
      )}
    </div>
  );
};

export default Home;
