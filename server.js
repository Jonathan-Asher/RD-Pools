import express from 'express';

const port = process.env.PORT || 80;

const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.status(200).send('hello world');
});

server.listen(port, () => {
  console.info('Listening on port ' + port);
});