const express = require('express');
const axios = require('axios');
const app = express();


app.set('trust proxy', true);

app.get('/', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`Your IP address is: ${ipAddress}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});