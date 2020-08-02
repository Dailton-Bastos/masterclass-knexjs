const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

// notfound
server.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  return next(error);
});

// catch all
server.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });

  return next();
});

server.listen(3333, () => console.log('Server on'));
