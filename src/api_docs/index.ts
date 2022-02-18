import swaggerUI from 'swagger-ui-express';

import tags from './tags.json';
import header from './header.json';
import { Voluntaries } from './paths';
import { Authentication, Voluntary } from './schemas';

const servers = () => {
  if (process.env.NODE_ENV !== 'production') {
    return { servers: [{ url: 'http://localhost:3001/api' }] };
  }
  return '';
};

const doc = {
  ...header,
  ...tags,
  ...servers(),
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
