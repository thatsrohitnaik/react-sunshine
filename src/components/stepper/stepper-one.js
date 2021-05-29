const steps = [
  {
    step: 'PRE-PROCESS FILES',
    complete: true,
    current: false
  },
  {
    step: 'ENTITY SEARCH',
    complete: true,
    current: false
  },
  {
    step: 'ENTITY CLASSIFICATION',
    complete: true,
    current: false
  },
  {
    step: 'FILE CLASSIFICATION',
    complete: false,
    current: true
  },
  {
    step: 'REDACT',
    complete: false,
    current: false
  },
  {
    step: 'FINALISE',
    complete: false,
    current: false
  }
];

export default steps;
