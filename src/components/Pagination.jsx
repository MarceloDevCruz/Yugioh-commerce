import React from 'react';

const MAXIMO_ITEMS = 7;
const MAXIMO_ESQUERDA = (MAXIMO_ITEMS - 1) / 2;

const Pagination = ({ limite, total, offset, setOffSet }) => {
  const paginaAtual = offset ? offset / limite + 1 : 1;
  const totalPaginas = Math.ceil(total / limite);
  const primeiraPagina = Math.max(paginaAtual - MAXIMO_ESQUERDA, 1);

  return (
    <ul>
      {Array.from({ length: MAXIMO_ITEMS })
        .map((_, index) => index + primeiraPagina)
        .map((pagina, index) => (
          <li key={index}>
            <button onClick={() => setOffset((pagina - 1) * limite)}>
              {pagina}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
