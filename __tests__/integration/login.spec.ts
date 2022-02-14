import request from 'supertest';
import app from '../../src/app';
import defaultDB from '../utils/defaultDB';

const mockUser = {
  name: 'supertest',
  email: 'supertest@hotmail.com',
  password: '123456',
};

const createUser = async () =>
  request(app).post('/api/voluntary').send(mockUser);

describe('Authentication voluntary', () => {
  defaultDB();
  it('should authenticate user with credentials valid', async () => {
    await createUser();

    const response = await request(app)
      .post('/api/voluntary/auth')
      .send({ email: mockUser.email, password: mockUser.password });

    expect(response.status).toBe(200);
  });

  it('should authenticate user, expect jwt token', async () => {
    await createUser();

    const response = await request(app)
      .post('/api/voluntary/auth')
      .send({ email: mockUser.email, password: mockUser.password });

    console.log(response.body);

    expect(response.body).toHaveProperty('token');
  });

  it('should authenticate user with invalid email', async () => {
    await createUser();

    const response = await request(app)
      .post('/api/voluntary/auth')
      .send({ email: `${mockUser.email}a`, password: mockUser.password });

    console.log(response.body);

    expect(response.status).toBe(401);
  });

  it('should authenticate user with invalid password', async () => {
    await createUser();

    const response = await request(app)
      .post('/api/voluntary/auth')
      .send({ email: mockUser.email, password: mockUser.password + 1 });

    console.log(response.body);

    expect(response.status).toBe(401);
  });
});
