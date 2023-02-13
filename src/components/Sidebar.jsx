import React, { useState, useContext } from 'react';
import { IoListCircle, IoClose } from 'react-icons/io5';
import { CreateContext } from '../context/CreateContext';

const Sidebar = () => {
  const [openButton, setOpenButton] = useState(true);

  const handleButton = () => {
    setOpenButton(!openButton);
  };

  const context = useContext(CreateContext);

  const typeCards = [
    ...new Set(context.data && context.data.map((card) => card.type)),
  ];

  const searchCard = (card) => {
    context.setSearchType(card);
  };

  return (
    <>
      <button className="util-bg-transparese" onClick={handleButton}>
        {openButton && (
          <IoListCircle className="sidebar__btn sidebar__btn-list" />
        )}
      </button>
      {!openButton && (
        <>
          <section className="sidebar">
            <button className="util-bg-transparese" onClick={handleButton}>
              <IoClose className="sidebar__btn sidebar__btn-close" />
            </button>
            <div
              className={
                context.theme === 'dark'
                  ? 'sidebar__container dark__sidebar__container'
                  : 'sidebar__container'
              }
            >
              <div
                className={
                  context.theme === 'dark'
                    ? 'sidebar__container-header dark__sidebar__container-header'
                    : 'sidebar__container-header'
                }
              >
                <h2
                  className={
                    context.theme === 'dark'
                      ? 'sidebar__title dark__sidebar__title'
                      : 'sidebar__title'
                  }
                >
                  Filtrar por tipo
                </h2>
              </div>
              <div
                className={
                  context.theme === 'dark'
                    ? 'sidebar__container-filter dark__sidebar__container-filter'
                    : 'sidebar__container-filter'
                }
              >
                <ul className="list__ul">
                  <li className="list__li" onClick={() => searchCard('')}>
                    Todos os Tipos
                  </li>
                  {context.data &&
                    typeCards.map((card) => (
                      <li
                        className="list__li"
                        key={card}
                        onClick={() => searchCard(card)}
                      >
                        {card}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Sidebar;
