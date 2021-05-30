const schema = [
  {
    headerName: 'File Name',
    field: 'fileName',
    minWidth: 80,
    headercheckboxSelection: true,
    headercheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Attachment',
    field: 'attachment',
    minWidth: 80,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Source File',
    field: 'sourceFile',
    minWidth: 80,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Ext',
    field: 'ext',
    minWidth: 20,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'DS Entities',
    field: 'dsEntities',
    minWidth: 80,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Pages',
    field: 'pages',
    minWidth: 50,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Redact Entities',
    field: 'redactEntities',
    minWidth: 80,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Redact Entities Pages',
    field: 'redactEntitiesPages',
    minWidth: 80,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'From/To/CcDS',
    field: 'fromToCcDS',
    minWidth: 80,
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
