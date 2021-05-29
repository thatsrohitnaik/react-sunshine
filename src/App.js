import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import Table from './components/table/';
import schema from './table-schema/table-one';
import rowData from './table-data/table-one';

import './style.css';

const App = () => {
  return <>{rowData ? <Table schema={schema} rowData={rowData} /> : null}</>;
};

export default App;
