const homeData = {
  user: {
    name: 'Rachel'
  },
  steps: [
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
  ],
  info: [
    {
      client: 'Sekura',
      fullname: 'Rob Smith',
      dataSubject: 'Will Smith',
      alliases: 'Will Smith',
      clientDetail: 'Phone: 67548006',
      gender: 'male'
    }
  ],
  notification: [
    {
      icon: 'fas fa-share-alt',
      count: 133,
      text: 'Share with DS'
    },
    {
      icon: 'fas fa-unlink',
      count: 300,
      text: 'Not released'
    },
    {
      icon: 'fas fa-ban',
      count: 0,
      text: 'spam'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'Related - Do Not Share'
    },
    {
      icon: 'fas fa-copy',
      count: 2,
      text: 'Duplicates'
    }
  ],
  detail: [
    {
      fileName: '1.msg',
      attachment: false,
      sourceFile: '2.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '2.msg',
      attachment: true,
      sourceFile: '3.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 2,
      redactEntities: 2,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '3.msg',
      attachment: false,
      sourceFile: '',
      ext: '.msg',
      dsEntities: 6,
      pages: 9,
      redactEntities: 7,
      redactEntitiesPages: 8,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '4.msg',
      attachment: false,
      sourceFile: '5.msg',
      ext: '.msg',
      dsEntities: 3,
      pages: 5,
      redactEntities: 6,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '5.msg',
      attachment: false,
      sourceFile: '4.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '6.msg',
      attachment: true,
      sourceFile: '8.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: false,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '7.msg',
      attachment: false,
      sourceFile: '3.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '8.msg',
      attachment: true,
      sourceFile: '24.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 2,
      redactEntities: 2,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '9.msg',
      attachment: false,
      sourceFile: '',
      ext: '.msg',
      dsEntities: 6,
      pages: 9,
      redactEntities: 7,
      redactEntitiesPages: 8,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '10.msg',
      attachment: false,
      sourceFile: '13.msg',
      ext: '.msg',
      dsEntities: 3,
      pages: 5,
      redactEntities: 6,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '11.msg',
      attachment: false,
      sourceFile: '2.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '12.msg',
      attachment: true,
      sourceFile: '3.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 2,
      redactEntities: 2,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '13.msg',
      attachment: false,
      sourceFile: '',
      ext: '.msg',
      dsEntities: 6,
      pages: 9,
      redactEntities: 7,
      redactEntitiesPages: 8,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '14.msg',
      attachment: false,
      sourceFile: '5.msg',
      ext: '.msg',
      dsEntities: 3,
      pages: 5,
      redactEntities: 6,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '15.msg',
      attachment: false,
      sourceFile: '4.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '16.msg',
      attachment: true,
      sourceFile: '8.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: false,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '17.msg',
      attachment: false,
      sourceFile: '3.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '18.msg',
      attachment: true,
      sourceFile: '24.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 2,
      redactEntities: 2,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '19.msg',
      attachment: false,
      sourceFile: '',
      ext: '.msg',
      dsEntities: 6,
      pages: 9,
      redactEntities: 7,
      redactEntitiesPages: 8,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '20.msg',
      attachment: false,
      sourceFile: '13.msg',
      ext: '.msg',
      dsEntities: 3,
      pages: 5,
      redactEntities: 6,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '21.msg',
      attachment: false,
      sourceFile: '2.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '22.msg',
      attachment: true,
      sourceFile: '3.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 2,
      redactEntities: 2,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '23.msg',
      attachment: false,
      sourceFile: '',
      ext: '.msg',
      dsEntities: 6,
      pages: 9,
      redactEntities: 7,
      redactEntitiesPages: 8,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '24.msg',
      attachment: false,
      sourceFile: '5.msg',
      ext: '.msg',
      dsEntities: 3,
      pages: 5,
      redactEntities: 6,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '25.msg',
      attachment: false,
      sourceFile: '4.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '26.msg',
      attachment: true,
      sourceFile: '8.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: false,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '27.msg',
      attachment: false,
      sourceFile: '3.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 1,
      redactEntities: 3,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '28.msg',
      attachment: true,
      sourceFile: '24.msg',
      ext: '.msg',
      dsEntities: 4,
      pages: 2,
      redactEntities: 2,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '29.msg',
      attachment: false,
      sourceFile: '',
      ext: '.msg',
      dsEntities: 6,
      pages: 9,
      redactEntities: 7,
      redactEntitiesPages: 8,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    },
    {
      fileName: '30.msg',
      attachment: false,
      sourceFile: '13.msg',
      ext: '.msg',
      dsEntities: 3,
      pages: 5,
      redactEntities: 6,
      redactEntitiesPages: 2,
      fromToCcDS: true,
      redact: false,
      share: 'Share With DS'
    }
  ]
};

export default homeData;
