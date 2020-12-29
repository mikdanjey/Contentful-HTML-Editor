const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, './app.html'));
});

app.get('/test', (_, res) => {
  res.sendFile(path.join(__dirname, './test.html'));
});

// local variables
const PORT = 5000;
app.listen(PORT, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎 Listening on port %s.", PORT);
  }
});