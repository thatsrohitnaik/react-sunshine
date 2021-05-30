import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from '../components/table/';
import schema from './table-schema/table-one';
import rowData from './table-data/table-one';
import Stepper from '../components/stepper/';
import Steps from '../components/stepper/stepper-one';
import Panel from '../components/panel/';
import InfoPanel from '../components/info-panel';
import NavBar from '../components/nav/';

import './style.css';

const PageOne = () => {
  return (
    <div className="">
      <NavBar />
      <InfoPanel />
      <Stepper steps={Steps} />
      <Panel />
      {rowData ? <Table schema={schema} rowData={rowData} /> : null}
    </div>
  );
};

export default PageOne;
