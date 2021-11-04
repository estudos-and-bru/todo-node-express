import 'reflect-metadata';
import express from 'express';
import routes from './src/shared/routes/index';
import './src/shared/typeorm';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
  res.send('Teste Ok');
});

app.listen(1234, () => {
  console.log('servidor rodando na porta 1234');
});
