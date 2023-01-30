//Import express
const express = require('express');
//Import db connection
const db = require('./config/connection');
//Import routes
const routes = require('./routes');

const PORT = 3001; //Define port
const app = express(); //Initialize app

//Configure app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Start server after connecting to db
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
