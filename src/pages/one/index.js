import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from '../../components/table/';
import detailSchema from './table-schema/table-one';
import detailData from './table-data/table-one';
import Stepper from '../../components/stepper/';
import Steps from '../../components/stepper/stepper-one';
import Notification from '../../components/notification/';
import NavBar from '../../components/nav/';
import BasicTable from '../../components/table/basic';
import infoSchema from './table-schema/table-info';
import infoData from './table-data/table-info';
import notificationData from './notification-data/notification';
import Dropdown from '../../components/dropdown/';

import './style.css';

const dropDownOne = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-default dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        Tutorials
        <span class="caret" />
      </button>
      <ul class="dropdown-menu">
        <li>
          <a tabindex="-1" href="#">
            HTML
          </a>
        </li>
        <li>
          <a tabindex="-1" href="#">
            CSS
          </a>
        </li>
        <li class="dropdown-submenu">
          <a class="test" tabindex="-1" href="#">
            New dropdown <span class="caret" />
          </a>
          <ul class="dropdown-menu">
            <li>
              <a tabindex="-1" href="#">
                2nd level dropdown
              </a>
            </li>
            <li>
              <a tabindex="-1" href="#">
                2nd level dropdown
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const PageOne = () => {
  return (
    <div className="">
      <NavBar />
      <div className="gutterSpace">
        <ul className="nav nav-tabs">
          <li className="" style={{ float: 'right' }}>
            <a data-toggle="tab" href="#">
              SAR SETTING
            </a>
          </li>
          <li className="active" style={{ float: 'right' }}>
            <a data-toggle="tab" href="#dsDetail">
              DS DETAILS
            </a>
          </li>
        </ul>
        {infoData ? (
          <BasicTable schema={infoSchema} rowData={infoData} />
        ) : null}
      </div>
      <Stepper steps={Steps} />
      <Notification notificationData={notificationData} />
      <div className="row">
        <div className="col-md-9">
          <Dropdown />
        </div>
        <div className="col-md-3">{dropDownOne()}</div>
      </div>
      {detailData ? <Table schema={detailSchema} rowData={detailData} /> : null}
    </div>
  );
};

export default PageOne;
