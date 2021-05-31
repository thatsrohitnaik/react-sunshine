import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from '../../components/table/';
import detailSchema from './table-schema/table-one';
import Stepper from '../../components/stepper/';
import Notification from '../../components/notification/';
import NavBar from '../../components/nav/';
import BasicTable from '../../components/table/basic';
import infoSchema from './table-schema/table-info';
import Dropdown from '../../components/dropdown/';

import './style.css';

const action = {
  title: 'Action',
  select: [
    {
      group: '',
      option: [
        { label: 'Do Not Process', value: 1 },
        { label: 'Add To Process', value: 2 }
      ]
    },
    {
      group: 'Change Classification',
      option: [
        { label: 'Share With DS', value: 5 },
        { label: 'Do Not Share', value: 3 },
        { label: 'Not Related', value: 4 }
      ]
    }
  ]
};

const columns = {
  title: 'Columns',
  select: [
    {
      group: '',
      option: [
        { label: 'File Name', value: 1 },
        { label: 'Ext', value: 2 },
        { label: 'Page', value: 3 },
        { label: 'Redact', value: 4 },
        { label: 'Attachment', value: 5 }
      ]
    }
  ]
};

const InfoPanel = props => {
  const { user, info } = props;
  return (
    <>
      {' '}
      <div className="info-panel-background" />
      <div className="gutter-space">
        <ul className="nav nav-tabs">
          <li>
            <h5 className="align-in-middle">Details for {user.name}</h5>
          </li>
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
        {info ? <BasicTable schema={infoSchema} rowData={info} /> : null}
      </div>
    </>
  );
};
const Home = props => {
  const { info, detail, notification, user, steps } = props.data;
  return (
    <div className="">
      <NavBar />
      <InfoPanel info={info} user={user} />
      <Stepper steps={steps} />
      <Notification notificationData={notification} />
      <div className="row">
        <div className="col-md-9" />
        <div className="col-md-3" style={{ display: 'flex' }}>
          <Dropdown data={columns} />
          <Dropdown data={action} />
        </div>
      </div>
      {detail ? <Table schema={detailSchema} rowData={detail} /> : null}
    </div>
  );
};

export default Home;
