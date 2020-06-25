const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5090;

app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
