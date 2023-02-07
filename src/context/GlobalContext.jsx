import React, { useState, useEffect } from 'react';
import api from '../config/api';
import axios from 'axios';

const GlobalContext = () => {
  const [data, setData] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const limite = 63;
  const total = data.length;
  const porPagina = [];

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    for (let i = offSet; i < offSet + limite; i++) {
      porPagina.push(data[i]);
      if (data[i] === undefined) return;
    }
  }, [porPagina, offSet]);

  return { data, setData, offSet, setOffSet, limite, total, porPagina };
};

export default GlobalContext;
