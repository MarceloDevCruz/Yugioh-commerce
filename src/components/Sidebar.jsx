import React, { useState } from 'react';
import { IoListCircle, IoClose } from 'react-icons/io5';

const Sidebar = () => {
  const [openButton, setOpenButton] = useState(true);

  const handleButton = () => {
    setOpenButton(!openButton);
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
            <div className="sidebar__container">
              <div className="sidebar__container-header">
                <h2 className="sidebar__title">Filtrar por tipo</h2>
              </div>
              <div className="sidebar__container-filter">
                <ul className="list__ul">
                  <li className="list__li">Todos</li>
                  <li className="list__li">Effect monster</li>
                  <li className="list__li">Flip effect monster</li>
                  <li className="list__li">Fusion monster</li>
                  <li className="list__li">Gemini monster</li>
                  <li className="list__li">Link monster</li>
                  <li className="list__li">Normal monster</li>
                  <li className="list__li">Normal tunder monster</li>
                  <li className="list__li">Pendulum effect fusion monster</li>
                  <li className="list__li">Pendulum effect monster</li>
                  <li className="list__li">Pendulum effect ritual monster</li>
                  <li className="list__li">Pendulum flip effect monster</li>
                  <li className="list__li">Pendulum normal monster</li>
                  <li className="list__li">Pendulum turner effect monster</li>
                  <li className="list__li">Ritual monster</li>
                  <li className="list__li">Skill card</li>
                  <li className="list__li">Spell card</li>
                  <li className="list__li">Spiriti monster</li>
                  <li className="list__li">Synchro moster</li>
                  <li className="list__li">Synchro pendulum effect monster</li>
                  <li className="list__li">Synchro tuner monster</li>
                  <li className="list__li">Token</li>
                  <li className="list__li">Toon moster</li>
                  <li className="list__li">Trap card</li>
                  <li className="list__li">Tuner moster</li>
                  <li className="list__li">Union effect monster</li>
                  <li className="list__li">XYZ monster</li>
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
