import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './style.scss';

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

  const dropDownRedact = param => {
    return (
      <div className="form-group">
        <select
          className="form-control selectDropdown"
          id="redact"
          style={{ border: 'none', backgroundColor: 'transparent' }}
        >
          <option>TRUE</option>
          <option>FALSE</option>
        </select>
      </div>
    );
  };

  const dropDownShare = param => {
    return (
      <div className="form-group">
        <select
          className="form-control selectDropdown"
          id="share"
          style={{ border: 'none', backgroundColor: 'transparent' }}
        >
          <option>Share With DS</option>
          <option>Don Not Share</option>
        </select>
      </div>
    );
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      {' '}
      <AgGridReact
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          resizable: true,
          sortable: true,
          floatingFilter: true
        }}
        frameworkComponents={{
          dropDownRedact: dropDownRedact,
          dropDownShare: dropDownShare
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
            cellRenderer={s.cellRenderer}
            suppressMenu={s.suppressMenu}
          />
        ))}
      </AgGridReact>
    </div>
  );
};

export default Table;
