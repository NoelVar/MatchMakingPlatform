import 'dotenv/config';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY576;

export function isAuthentic(req, res, next)
{
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token)
    {
        const error = new Error(`Auth token missing.`);
        error.status = 400;
        return next(error);
    }

    if (!req.session.uid)
    {
        const error = new Error(`Session expired.`);
        error.status = 401;
        return next(error);
    }

    try
    {
        const verified = jwt.verify(token, JWT_SECRET_KEY);
        req.user = verified;
        next();
    }
    catch (err)
    {
        console.log(err);
        return res.status(401).json({ message: 'Invalid auth token.' });
    }
}