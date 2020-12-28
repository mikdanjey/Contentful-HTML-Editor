const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, './app.html'));
});

app.listen(80, "0.0.0.0", () => {
  console.log(`Listening on 80.`);
});
