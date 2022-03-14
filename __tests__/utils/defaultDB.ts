import connectionDB from '../../src/database';

export default () => {
  beforeAll(async () => {
    await connectionDB.create();
  });

  afterAll(async () => {
    await connectionDB.close();
  });

  beforeEach(async () => {
    await connectionDB.clear();
  });
};
