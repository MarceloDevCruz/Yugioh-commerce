import React, { useState, useContext } from 'react';
import { IoListCircle, IoClose } from 'react-icons/io5';
import { CreateContext } from '../context/CreateContext';

const Sidebar = () => {
  const [openButton, setOpenButton] = useState(true);

  const handleButton = () => {
    setOpenButton(!openButton);
  };

  const context = useContext(CreateContext);

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
                  <li
                    onClick={() => context.filterCards('default')}
                    className="list__li"
                  >
                    Todos
                  </li>
                  <li
                    onClick={() => context.filterCards('Effect Monster')}
                    className="list__li"
                  >
                    Effect monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Flip Effect Monster')}
                    className="list__li"
                  >
                    Flip effect monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Fusion Monster')}
                    className="list__li"
                  >
                    Fusion monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Gemini Monster')}
                    className="list__li"
                  >
                    Gemini monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Link Monster')}
                    className="list__li"
                  >
                    Link monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Normal Monster')}
                    className="list__li"
                  >
                    Normal monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Normal Tuner Monster')}
                    className="list__li"
                  >
                    Normal tuner monster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Pendulum Effect Fusion Monster')
                    }
                    className="list__li"
                  >
                    Pendulum effect fusion monster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Pendulum Effect Monster')
                    }
                    className="list__li"
                  >
                    Pendulum effect monster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Pendulum Effect Ritual Monster')
                    }
                    className="list__li"
                  >
                    Pendulum effect ritual monster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Pendulum Flip Effect Monster')
                    }
                    className="list__li"
                  >
                    Pendulum flip effect monster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Pendulum Normal Monster')
                    }
                    className="list__li"
                  >
                    Pendulum normal monster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Pendulum Tuner Effect Monster')
                    }
                    className="list__li"
                  >
                    Pendulum tuner effect monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Ritual Monster')}
                    className="list__li"
                  >
                    Ritual monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Skill Card')}
                    className="list__li"
                  >
                    Skill card
                  </li>
                  <li
                    onClick={() => context.filterCards('Spell Card')}
                    className="list__li"
                  >
                    Spell card
                  </li>
                  <li
                    onClick={() => context.filterCards('Spirit Monster')}
                    className="list__li"
                  >
                    Spirit Monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Synchro Monster')}
                    className="list__li"
                  >
                    Synchro moster
                  </li>
                  <li
                    onClick={() =>
                      context.filterCards('Synchro Pendulum Effect Monster')
                    }
                    className="list__li"
                  >
                    Synchro pendulum effect monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Synchro Tuner Monster')}
                    className="list__li"
                  >
                    Synchro tuner monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Token')}
                    className="list__li"
                  >
                    Token
                  </li>
                  <li
                    onClick={() => context.filterCards('Toon Monster')}
                    className="list__li"
                  >
                    Toon monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Trap Card')}
                    className="list__li"
                  >
                    Trap card
                  </li>
                  <li
                    onClick={() => context.filterCards('Tuner Monster')}
                    className="list__li"
                  >
                    Tuner monster
                  </li>
                  <li
                    onClick={() => context.filterCards('Union Effect Monster')}
                    className="list__li"
                  >
                    Union effect monster
                  </li>
                  <li
                    onClick={() => context.filterCards('XYZ Monster')}
                    className="list__li"
                  >
                    XYZ monster
                  </li>
                  <li className="list__li">XYZ pendulum effect monster</li>
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
