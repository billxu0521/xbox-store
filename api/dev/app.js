const express = require('express');
const games = require('../api/games');
const gamepass = require('../api/gamepass');
const search = require('../api/search');
const news = require('../api/news');
const videos = require('../api/videos');
const image = require('../api/image');
const cors = require('cors');

const app = express();

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors());

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/api/games', cors(corsOptions),games);
app.get('/api/gamepass', cors(corsOptions),gamepass);
app.get('/api/search', cors(corsOptions), search);
app.get('/api/news', cors(corsOptions),news);
app.get('/api/videos',cors(corsOptions), videos);
app.get('/api/image(/:path*)?', cors(corsOptions), image);
app.get('/', cors(corsOptions), (req, res, next) => {
  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
});

module.exports = app;
