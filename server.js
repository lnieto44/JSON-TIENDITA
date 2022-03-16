const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('data/bdProductOs.json');
const middlewares = jsonserver.defaults();
server.use(middlewares);

const port = process.env.PORT || 4000;
server.listen(port, () => {
console.log('JSON Server is running');

})