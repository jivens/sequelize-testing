const express = require('express');
const app = express();
// store config variables in dotenv
require('dotenv').config();
// ORM (Object-Relational Mapper library)
const Sequelize = require('sequelize');

//****** Set up default mysql connection START ******
// const mysql = require('mysql2');
// var connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// })
// connection.connect(function(err) {
//   if (err) throw err
//   console.log('You are now connected...')
// });
// ****** Set up default mysql connection END ****** //

//
// Test direct connection to the database
//
// try {
//   connection.query('SELECT * FROM users', (err,rows) => {
//     if(err) throw err;
//
//     console.log('Data received from Db:\n');
//     console.log(rows);
//   });
// } catch(err) {
//   console.log(err);
// }

// ****** Set up default MYSQL connection START ****** //
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
  });

sequelize
.authenticate()
.then(() => {
  console.log('connected to MYSQL- COLRC database');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
// ****** Set up default MYSQL connection END ****** //

app.use('/', (req, res) => res.send("Welcome COLRC User"));
app.listen(process.env.GRAPHQLPORT, () => console.log('COLRC Enterprise Server is ready on localhost:' + process.env.GRAPHQLPORT));
