import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from './components/table/';
import schema from './components/table/table-schema/table-one';
import rowData from './components/table/table-data/table-one';
import Stepper from './components/stepper/';
import Steps from './components/stepper/stepper-one';

import './style.css';

const App = () => {
  console.log(rowData);
  return (
    <>
      <Stepper steps={Steps} />
      {rowData ? <Table schema={schema} rowData={rowData} /> : null}
    </>
  );
};

export default App;
