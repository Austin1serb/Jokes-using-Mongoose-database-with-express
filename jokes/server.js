const express = require('express');
const app = express();
const port = 8000;

require('dotenv').config();
require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokesRoutes = require('./routes/jokes.routes');
app.use('/', jokesRoutes);

app.listen(port, () => {
  console.log('SERVER ONLINE - AUSTIN SERB IS A PIMP----------------------------------------------------------------');
});
