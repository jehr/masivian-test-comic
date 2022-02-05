const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');

const PORT = 8080;
const app = express();

app.use(cors());
const corsOptions = {
  origin: '*',
};

app.get('/comics/:id', cors(corsOptions), async (req, res) => {
  const endpoint = `https://xkcd.com/${req.params.id}/info.0.json`;

  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(endpoint, fetchOptions);

  const jsonResponse = await response.json();

  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
