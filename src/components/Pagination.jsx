import React, { createContext, useContext } from 'react';
import { CreateContext } from '../context/CreateContext';

const Pagination = () => {
  const context = useContext(CreateContext);

  const MAXIMO_ITEMS = 11;
  const MAXIMO_ESQUERDA = (MAXIMO_ITEMS - 1) / 2;

  const paginaAtual = context.offSet ? context.offSet / context.limite + 1 : 1;
  const totalPaginas = Math.ceil(context.total / context.limite) - 1;
  const primeiraPagina = Math.max(totalPaginas - (MAXIMO_ITEMS - 1), 1);
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
              onClick={() => context.setOffSet((pagina - 1) * context.limite)}
            >
              {pagina}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
