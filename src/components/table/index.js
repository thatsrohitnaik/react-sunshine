import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = props => {
  const { schema } = props;
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(props.rowData);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = data => {
      setRowData(data);
    };

    updateData(rowData);
  };

  const onQuickFilterChanged = () => {
    gridApi.setQuickFilter(document.getElementById('quickFilter').value);
  };

  return (
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
      {JSON.parse(schema).map(s => {
        <AgGridColumn
          headerName={s.headerName}
          field={s.field}
          minWidth={s.minWidth}
          headerCheckboxSelection={s.headerCheckboxSelection}
          headerCheckboxSelectionFilteredOnly={
            s.headerCheckboxSelectionFilteredOnly
          }
          checkboxSelection={s.checkboxSelection}
        />;
      })}
    </AgGridReact>
  );
};

export default Table;
