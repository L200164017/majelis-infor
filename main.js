const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/product', (req, res) => {
  res.status(200).json({
    message: 'Data product',
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
