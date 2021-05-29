import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from './components/table/';
import BasicTable from './components/table/basic';

import schema from './components/table/table-schema/table-one';
import rowData from './components/table/table-data/table-one';
import infoSchema from './components/table/table-schema/table-info';
import infoData from './components/table/table-data/table-info';

import Stepper from './components/stepper/';
import Steps from './components/stepper/stepper-one';
import Panel from './components/panel/';
import InfoPanel from './components/info-panel';

import './style.css';

const App = () => {
  return (
    <div className="">
      <InfoPanel />
      <Stepper steps={Steps} />
      <Panel />

      {rowData ? <Table schema={schema} rowData={rowData} /> : null}
    </div>
  );
};

export default App;
