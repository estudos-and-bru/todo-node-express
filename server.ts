import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('funfando');
});

app.listen(1234, () => {
  console.log('servidor rodando na porta 1234');
});
