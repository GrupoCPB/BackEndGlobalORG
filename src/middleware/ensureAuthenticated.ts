import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { configJWT } from '../config/jwt';

type TTokenVoluntary = {
  iat: number;
  exp: number;
  id: string;
  role: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is incorrect');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, configJWT.secret) as TTokenVoluntary;

    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    return next();
  } catch (err) {
    throw new Error('Invalid JWT token');
  }
}
