const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "PUBLIC" folder
app.use(express.static('PUBLIC'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/PUBLIC/index.html');
});

app.listen(PORT, () => {
  console.log(`Auth service running at http://localhost:${PORT}`);
});
