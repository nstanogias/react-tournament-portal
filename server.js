const jsonServer = require('json-server');
const createTournament = require('./api/createTournament');
const data = require('./api/db');
const server = jsonServer.create();
const router = jsonServer.router(data());
const middlewares = jsonServer.defaults({ static: './build' });
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body = createTournament(req.body.name);
  }
  // Continue to JSON Server router
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);
