const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
//MiddLewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoutes = require('./routes/posts');
const tvRoutes = require('./routes/tv');
const moviesRoutes = require('./routes/movies');

app.use('/posts', postRoutes);
app.use('/tv', tvRoutes);
app.use('/movies', moviesRoutes);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on Home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connect to DB!')
);
app.listen(8000);
