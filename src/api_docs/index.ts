import swaggerUI from 'swagger-ui-express';

import tags from './tags.json';
import header from './header.json';
import { Users } from './paths';
import { Authentication, User } from './schemas';

const servers = () => {
  const PORT = process.env.APP_PORT;
  if (process.env.NODE_ENV !== 'production') {
    return { servers: [{ url: `http://localhost:${PORT}/api` }] };
  }

  return '';
};

const doc = {
  ...header,
  ...tags,
  ...servers(),
  paths: {
    ...Users,
  },
  components: {
    schemas: {
      ...Authentication,
      ...User,
    },
  },
};

const swaggerServe = swaggerUI.serve;
const swaggerDoc = swaggerUI.setup(doc, {
  customSiteTitle: 'Documentation API GlobalOrg',
});

export { swaggerDoc, swaggerServe };
