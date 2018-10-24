const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/m-events'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/m-events/index.html');
});

const port = process.env.PORT || 3080;

app.listen(port,()=> console.log(`app listening to port ${port}`));