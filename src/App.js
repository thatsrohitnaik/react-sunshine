import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import Table from './components/table/';
import schema from './schema/table-one';

import './style.css';

const rowData2 = [
  {
    fileName: '1.msg',
    attachment: false,
    sourceFile: '3.msg',
    ext: '.msg',
    dsEntities: 4,
    pages: 1,
    redactEntities: 3,
    redactEntitiesPages: 2,
    fromToCcDS: true,
    redact: false,
    share: 'Share With DS'
  }
];

const App = () => {
  const [rowData, setRowData] = useState(null);

  const getData = params => {
    axios.get('/table-twddo.json').then(resp => {
      setRowData(resp.data);
      console.log('okokoko');
    });
  };
  getData();

  return <>{rowData ? <Table schema={schema} rowData={rowData} /> : null}</>;
};

export default App;
