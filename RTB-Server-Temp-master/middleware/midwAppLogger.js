import colors from 'colors';

export function logger(req, res, next)
{
  const methodColors = {
    GET: 'green',
    POST: 'blue',
    PUT: 'yellow',
    DELETE: 'red',
  };

  const color = methodColors[req.method] || white;

  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} by ${req.session.uid}`[color]);
  
  next();
};
