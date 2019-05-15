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
    //operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      timestamps: true
    },
    //logging:false
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

//
// User model for sequelize
//
const User = sequelize.define('user', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  roles: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// force: true will drop the table if it already exists
User
.sync({force: true})
.then(() => {
  // Table created
  return User.create({
    name: "John Ivensɛ́ʕ'ʷ",
    email: 'john.wagner.ivens@gmail.com',
    password: 'john.wagner.ivens@gmail.com',
    roles: "admin"
  });
})
.then((user) => {
  console.log(user);
  return User.findOne({
    where: { id: 1 }
  }).then((res) => {
    return [{
      id: res.dataValues.id,
      name: res.dataValues.name,
      email: res.dataValues.email,
      roles: res.dataValues.roles.split(',')
    }];
  });
})
.then((newuser) => {
  console.log(newuser);
});

app.use('/', (req, res) => res.send("Welcome COLRC User"));
app.listen(process.env.GRAPHQLPORT, () => console.log('COLRC Enterprise Server is ready on localhost:' + process.env.GRAPHQLPORT));
