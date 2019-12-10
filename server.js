const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8181;
const staticClient = express.static(path.join(__dirname, 'client', 'build'));

app.use('/', staticClient);
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'client', 'build')));
app.use('*', staticClient);

http.createServer(app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
