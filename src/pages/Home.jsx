import React from 'react';
import api from '../config/api';
import axios from 'axios';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';

import Card from '../components/Card';

import { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  /* console.log(data[1121].card_images[0].image_url_cropped); */

  for (let index = 0; index < 10; index++) {
    const element = data[index];
    console.log(element);
  }

  return (
    <div className="home">
      <h1 className="home__title">Yugioh card Shop</h1>
      {data && (
        <div className="home__card">
          <Card card={data[4088]} />
          <Card card={data[4089]} />
          <Card card={data[4090]} />
          <Card card={data[4091]} />
          <Card card={data[4092]} />
          <Card card={data[4093]} />
          <Card card={data[4094]} />
          <Card card={data[4095]} />
          <Card card={data[4096]} />
          <Card card={data[4097]} />
          <Card card={data[4098]} />
          <Card card={data[4099]} />
          <Card card={data[4100]} />
          <Card card={data[4101]} />
          <Card card={data[4102]} />
          <Card card={data[4103]} />
          <Card card={data[4104]} />
          <Card card={data[4105]} />
          <Card card={data[4106]} />
          <Card card={data[4107]} />
          <Card card={data[4108]} />
          <Card card={data[4109]} />
          <Card card={data[4110]} />
          <Card card={data[4111]} />
          <Card card={data[4112]} />
          <Card card={data[4113]} />
          <Card card={data[4114]} />
          <Card card={data[4115]} />
          <Card card={data[4116]} />
          <Card card={data[4117]} />
          <Card card={data[4118]} />
          <Card card={data[4119]} />
          <Card card={data[4120]} />
          <Card card={data[4121]} />
          <Card card={data[4122]} />
          <Card card={data[4123]} />
          <Card card={data[4124]} />
          <Card card={data[4125]} />
          <Card card={data[4126]} />
        </div>
      )}
    </div>
  );
};

export default Home;
