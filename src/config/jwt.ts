import 'dotenv/config';

export const configJWT = {
  secret: process.env.SECRET_JWT,
  expiresIn: '1d',
};
