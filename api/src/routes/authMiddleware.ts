import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET = "1234";

export function autenticarToken(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Token não fornecido' });
    return; // só return, não return res.status(...)
  }

  jwt.verify(token, SECRET, (err, decoded: any) => {
    if (err) {
      res.status(403).json({ error: 'Token inválido ou expirado' });
      return; // só return, não return res.status(...)
    }

    (req as any).usuarioId = decoded.id;
    next();
  });
}
