import React from 'react';

const MAXIMO_ITEMS = 11;
const MAXIMO_ESQUERDA = (MAXIMO_ITEMS - 1) / 2;

const Pagination = ({ limite, total, offSet, setOffSet }) => {
  const paginaAtual = offSet ? offSet / limite + 1 : 1;
  const totalPaginas = Math.ceil(total / limite);
  const primeiraPagina = Math.max(paginaAtual - MAXIMO_ESQUERDA, 1);
  const primera = Math.min(
    Math.max(paginaAtual - MAXIMO_ESQUERDA, 1),
    primeiraPagina
  );

  return (
    <ul className="pagination">
      {Array.from({ length: Math.min(MAXIMO_ITEMS, totalPaginas) })
        .map((_, index) => index + primera)
        .map((pagina) => (
          <li key={pagina} className="pagination__list">
            <button
              className={
                pagina === paginaAtual
                  ? 'pagination--activity btn--pagination'
                  : 'btn--pagination'
              }
              onClick={() => setOffSet((pagina - 1) * limite)}
            >
              {pagina}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
