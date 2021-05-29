import React from 'react';
import './style';
import BasicTable from '../table/basic';
import infoSchema from '../table/table-schema/table-info';
import infoData from '../table/table-data/table-info';

const InfoPanel = () => {
  return (
    <div className="gutterSpace">
      <ul class="nav nav-tabs">
        <li className="" style={{ float: 'right' }}>
          <a data-toggle="tab" href="#">
            Home
          </a>
        </li>
        <li className="active" style={{ float: 'right' }}>
          <a data-toggle="tab" href="#dsDetail">
            DS DETAILS
          </a>
        </li>
      </ul>
      {infoData ? <BasicTable schema={infoSchema} rowData={infoData} /> : null}
    </div>
  );
};

export default InfoPanel;
