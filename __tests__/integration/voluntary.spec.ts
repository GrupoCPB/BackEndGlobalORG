import request from 'supertest';
import app from '../../src/app';
import defaultDB from '../utils/defaultDB';

const mockUser = {
  name: 'supertest',
  email: 'supertest@hotmail.com',
  password: '123456',
};

describe('Create new voluntary', () => {
  defaultDB();
  it('should create new user with valid data', async () => {
    const response = await request(app).post('/api/voluntary').send(mockUser);

    expect(response.status).toBe(201);
  });

  it('should create new user without email', async () => {
    const response = await request(app)
      .post('/api/voluntary')
      .send({ ...mockUser, email: '' });

    expect(response.status).toBe(400);
  });

  it('should create new user without password', async () => {
    const response = await request(app)
      .post('/api/voluntary')
      .send({ ...mockUser, password: '' });

    expect(response.status).toBe(400);
  });

  it('should create new user with duplicate email', async () => {
    await request(app)
      .post('/api/voluntary')
      .send({ ...mockUser });

    const response = await request(app)
      .post('/api/voluntary')
      .send({ ...mockUser });

    expect(response.status).toBe(400);
  });
});
