const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

app.use(express.json());
app.use(express.static('public'));

app.use(
  cors({
    origin: ['https://ads-parser.onrender.com/', 'http://localhost:8080'],
  })
);

const adsRoutes = require('./server/ads.routes');

app.use('/api/adsData', adsRoutes);

const port = process.env.PORT || 3030;

http.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
