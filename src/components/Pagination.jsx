import React from 'react';

const MAXIMO_ITEMS = 7;
const MAXIMO_ESQUERDA = (MAXIMO_ITEMS - 1) / 2;

const Pagination = ({ limite, total, offSet, setOffSet }) => {
  const paginaAtual = offSet ? offSet / limite + 1 : 1;
  const totalPaginas = Math.ceil(total / limite);
  const primeiraPagina = Math.max(paginaAtual - MAXIMO_ESQUERDA, 1);

  return (
    <ul>
      {Array.from({ length: Math.min(MAXIMO_ITEMS, totalPaginas) })
        .map((_, index) => index + primeiraPagina)
        .map((pagina) => (
          <li key={pagina}>
            <button onClick={() => setOffSet((pagina - 1) * limite)}>
              {pagina}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
