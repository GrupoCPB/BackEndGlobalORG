import swaggerUI from 'swagger-ui-express';

import tags from './tags.json';
import header from './header.json';
import { Voluntaries } from './paths';
import { Authentication, Voluntary } from './schemas';

const doc = {
  ...header,
  ...tags,
  paths: {
    ...Voluntaries,
  },
  components: {
    schemas: {
      ...Authentication,
      ...Voluntary,
    },
  },
};

const swaggerServe = swaggerUI.serve;
const swaggerDoc = swaggerUI.setup(doc, {
  customSiteTitle: 'Documentation API GlobalOrg',
});

export { swaggerDoc, swaggerServe };
