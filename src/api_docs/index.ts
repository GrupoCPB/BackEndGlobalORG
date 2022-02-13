import swaggerUI from 'swagger-ui-express';

import tags from './tags.json';
import header from './header.json';
import voluntaries from './voluntaries.json';

const doc = {
  ...header,
  ...tags,
  paths: {
    ...voluntaries,
  },
};

const swaggerServe = swaggerUI.serve;
const swaggerDoc = swaggerUI.setup(doc, {
  customSiteTitle: 'Documentation API GlobalOrg',
});

export { swaggerDoc, swaggerServe };
