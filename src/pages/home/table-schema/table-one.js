const schema = [
  {
    headerName: 'File Name',
    field: 'fileName',
    minWidth: 180,
    headercheckboxSelection: true,
    headercheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Attachment',
    field: 'attachment',
    minWidth: 180,
    filter: 'agTextColumnFilter',
    suppressMenu: true
  },
  {
    headerName: 'Source File',
    field: 'sourceFile',
    minWidth: 180,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Ext',
    field: 'ext',
    minWidth: 180,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'DS Entities',
    field: 'dsEntities',
    minWidth: 180,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Pages',
    field: 'pages',
    minWidth: 180,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Redact Entities',
    field: 'redactEntities',
    minWidth: 180,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Redact Entities Pages',
    field: 'redactEntitiesPages',
    minWidth: 180,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'From/To/CcDS',
    field: 'fromToCcDS',
    minWidth: 180,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Redact',
    field: 'redact',
    minWidth: 180,
    cellRenderer: 'dropDownRedact'
  },
  {
    headerName: 'Share',
    field: 'share',
    minWidth: 180,
    cellRenderer: 'dropDownShare'
  }
];

export default schema;
