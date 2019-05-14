const express = require('express');
const app = express();
// store config variables in dotenv
require('dotenv').config();

//****** Set up default mysql connection START ******
const mysql = require('mysql2');
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});
// ****** Set up default mysql connection END ****** //

app.use('/', (req, res) => res.send("Welcome COLRC User"));
app.listen(process.env.GRAPHQLPORT, () => console.log('COLRC Enterprise Server is ready on localhost:' + process.env.GRAPHQLPORT));
