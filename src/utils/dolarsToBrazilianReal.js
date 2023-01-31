function dolarsToBrazilianReal(dollarValue) {
  const exchangeRate = 5.55;
  return (dollarValue * exchangeRate).toFixed(2);
}

export default dolarsToBrazilianReal;
