import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import Table from './components/table/';
import schema from './schema/table-one';

import './style.css';

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = data => {
      setRowData(data);
    };
    axios.get('/table-one.json').then(resp => {
      updateData(resp.data);
    });
  };

  const onQuickFilterChanged = () => {
    gridApi.setQuickFilter(document.getElementById('quickFilter').value);
  };

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            resizable: true
          }}
          suppressRowClickSelection={true}
          rowSelection={'multiple'}
          onGridReady={onGridReady}
          rowData={rowData}
        >
          <AgGridColumn
            headerName="Athlete"
            field="athlete"
            minWidth={180}
            headerCheckboxSelection={true}
            headerCheckboxSelectionFilteredOnly={true}
            checkboxSelection={true}
          />
          <AgGridColumn field="age" />
          <AgGridColumn
            field="country"
            minWidth={150}
            filter="agTextColumnFilter"
            filterParams={{ caseSensitive: true, defaultOption: 'startsWith' }}
          />
          <AgGridColumn field="year" filter="agNumberColumnFilter" />
          <AgGridColumn
            field="date"
            minWidth={150}
            filter="agDateColumnFilter"
          />
          <AgGridColumn field="sport" minWidth={150} />
          <AgGridColumn field="gold" />
          <AgGridColumn field="silver" />
          <AgGridColumn field="bronze" />
          <AgGridColumn field="total" />
        </AgGridReact>
      </div>
    </>
  );
};

export default App;
