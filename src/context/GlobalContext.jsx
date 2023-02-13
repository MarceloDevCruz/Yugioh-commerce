import React, { useState, useEffect } from 'react';
import api from '../config/api';
import axios from 'axios';
import dolarsToBrazilianReal from '../utils/dolarsToBrazilianReal';
import priceFixed from '../utils/priceFixed';

const GlobalContext = () => {
  const [data, setData] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [cart, setCart] = useState([]);
  const [qtd, setQtd] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');

  const addToCart = (card) => {
    const copyCart = [...cart];
    const newCard = card;
    const price = Number(
      dolarsToBrazilianReal(newCard.card_prices[0].ebay_price)
    );

    const item = copyCart.find((product) => {
      return product.id === newCard.id;
    });

    if (!item) {
      copyCart.push({ ...newCard, qtd: 1 });
    } else {
      item.qtd = item.qtd + 1;
    }

    setCart(copyCart);
    setQtd(qtd + 1);
    setTotalPrice(Number(priceFixed(totalPrice + price)));
  };

  const removeToCart = (card) => {
    const copyCart = [...cart];
    const newCard = card;
    const price = Number(
      dolarsToBrazilianReal(newCard.card_prices[0].ebay_price)
    );

    const item = copyCart.find((product) => product.id === newCard.id);

    if (item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setCart(copyCart);
      setQtd(qtd - 1);
      setTotalPrice(Number(priceFixed(totalPrice - price)));
    } else if (item.qtd === 1) {
      const cartFiltered = copyCart.filter(
        (product) => product.id !== newCard.id
      );
      setCart(cartFiltered);
      setQtd(qtd - 1);
      setTotalPrice(Number(priceFixed(totalPrice - price)));
    }
  };

  const limite = 64;
  const total = data.length;

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    data,
    setData,
    offSet,
    setOffSet,
    limite,
    total,
    cart,
    setCart,
    addToCart,
    removeToCart,
    qtd,
    totalPrice,
    theme,
    setTheme,
    search,
    setSearch,
    searchType,
    setSearchType,
  };
};

export default GlobalContext;
