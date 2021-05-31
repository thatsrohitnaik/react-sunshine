import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Home from './pages/home/';
import homeData from './data/home';

import './style.css';

const App = () => {
  return (
    <div className="">
      <Home data={homeData} />
    </div>
  );
};

export default App;
