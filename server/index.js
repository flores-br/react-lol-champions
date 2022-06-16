import express from 'express';
const app = express();
import cors from 'cors';
import champData from './champions.js';

app.use(cors());

app.get('/', (req, res) => {
  const { q } = req.query;

  const search = data => {
    return data.filter(item => item['data']['name'].includes(q));
  };

  q ? res.json(search(champData)) : res.json(champData);
});

app.listen(5000, () => console.log('API is working!'));
