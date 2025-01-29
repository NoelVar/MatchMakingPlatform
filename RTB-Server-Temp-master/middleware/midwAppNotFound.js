export function notFound(req, res, next)
{
  const error = new Error(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} - Resource not found`);
  error.status = 404;
  next(error);
};
