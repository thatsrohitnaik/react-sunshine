import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = props => {
  const { schema } = props;
  console.log(schema);
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
  console.log(rowData);
  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      {' '}
      <AgGridReact
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          resizable: true,
          sortable: true
        }}
        suppressRowClickSelection={true}
        rowSelection={'multiple'}
        onGridReady={onGridReady}
        pagination={true}
        paginationAutoPageSize={true}
        rowData={rowData}
      >
        {schema.map((s, index) => (
          <AgGridColumn
            key={index}
            headerName={s.headerName}
            field={s.field}
            filter={s.filter}
            minWidth={s.minWidth}
            headerCheckboxSelection={s.headerCheckboxSelection}
            headerCheckboxSelectionFilteredOnly={
              s.headerCheckboxSelectionFilteredOnly
            }
            checkboxSelection={s.checkboxSelection}
          />
        ))}
      </AgGridReact>
    </div>
  );
};

export default Table;
