import React from 'react';

import Router from './routes/Router';
import CreateContext from './context/CreateContext';
import GlobalContext from './context/GlobalContext';

function App() {
  const context = GlobalContext();

  return (
    <CreateContext.Provider value={context}>
      <div className="container">
        <div className="content">
          <Router />
        </div>
      </div>
    </CreateContext.Provider>
  );
}

export default App;
