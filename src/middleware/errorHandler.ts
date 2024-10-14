// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error' });
};

export {errorHandler};