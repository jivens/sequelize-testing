const data = require('./Data');
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
    pool: { max: 5, min: 0, acquire: 300000, idle: 10000 },
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


// User model for sequelize
const User = sequelize.define('user', {
  first: { type: Sequelize.STRING },
  last: { type: Sequelize.STRING },
  username: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  roles: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

async function makeUsersTable(){
// force: true will drop the table if it already exists
await User.sync({force: true})
.then(() => {
  // Table created
  return User.create({
    first: "Original",
    last: "Data",
    username: "original",
    email: 'colrc@gmail.com',
    password: 'colrc@gmail.com',
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
      first: res.dataValues.first,
      last: res.dataValues.last,
      username: res.dataValues.username,
      password: res.dataValues.password,
      email: res.dataValues.email,
      roles: res.dataValues.roles.split(',')
    }];
  });
})
.then((newuser) => {
  console.log(newuser);
  console.log("COLRC");
});
}

const Spelling = sequelize.define('spelling', {
  reichard: { type: Sequelize.STRING },
  nicodemus: { type: Sequelize.STRING },
  salish: { type: Sequelize.STRING },
  english: { type: Sequelize.STRING },
  note: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Vowel = sequelize.define('vowel', {
  orthography: { type: Sequelize.STRING },
  height: { type: Sequelize.STRING },
  front: { type: Sequelize.STRING },
  central: { type: Sequelize.STRING },
  back: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Consonant = sequelize.define('consonant', {
  orthography: { type: Sequelize.STRING },
  type: { type: Sequelize.STRING },
  voice: { type: Sequelize.STRING },
  manner: { type: Sequelize.STRING },
  secondary: { type: Sequelize.STRING },
  labial: { type: Sequelize.STRING },
  alveolar: { type: Sequelize.STRING },
  alveopalatal: { type: Sequelize.STRING },
  lateral: { type: Sequelize.STRING },
  palatal: { type: Sequelize.STRING },
  velar: { type: Sequelize.STRING },
  uvular: { type: Sequelize.STRING },
  glottal: { type: Sequelize.STRING },
  pharyngeal: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Root = sequelize.define('root', {
  root: { type: Sequelize.STRING },
  number: { type: Sequelize.INTEGER },
  salish: { type: Sequelize.STRING },
  nicodemus: { type: Sequelize.STRING },
  english: { type: Sequelize.STRING },
  editnote: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Affix = sequelize.define('affix', {
  type: { type: Sequelize.STRING },
  salish: { type: Sequelize.STRING },
  nicodemus: { type: Sequelize.STRING },
  english: { type: Sequelize.STRING },
  link: { type: Sequelize.STRING },
  page: { type: Sequelize.STRING },
  editnote: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Stem = sequelize.define('stem', {
  category: { type: Sequelize.STRING },
  reichard: { type: Sequelize.STRING },
  doak: { type: Sequelize.STRING },
  salish: { type: Sequelize.STRING },
  nicodemus: { type: Sequelize.STRING },
  english: { type: Sequelize.STRING },
  note: { type: Sequelize.STRING },
  editnote: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

async function makeVowelTable(){
  await Vowel.sync({force: true});
  data.vowels.forEach(async function (row) {
    await Vowel.create({
      orthography: row.orthography,
      height: row.height,
      front: row.front,
      central: row.central,
      back: row.back,
    });
  });
  console.log("I have a vowel table");
}

async function makeConsonantTable(){
  console.log(data.consonants)
  await Consonant.sync({force: true});
  data.consonants.forEach(async function (row) {
    await Consonant.create({
      orthography: row.orthography ? row.orthography : '',
      voice: row.voice ? row.voice : '',
      manner: row.manner ? row.manner : '',
      secondary: row.secondary ? row.secondary : '',
      labial: row.labial ? row.labial : '',
      alveolar: row.alveolar ? row.alveolar : '',
      alveopalatal: row.alveopalatal ? row.alveopalatal : '',
      lateral: row.lateral ? row.lateral : '',
      palatal: row.palatal ? row.palatal : '',
      velar: row.velar ? row.velar : '',
      uvular: row.uvular ? row.uvular : '',
      glottal: row.glottal ? row.glottal : '',
      pharyngeal: row.pharyngeal ? row.pharyngeal : '',
    });
  });
  console.log("I have a consonant table");
}

const Bibliography = sequelize.define('bibliography', {
  author: { type: Sequelize.STRING },
  year: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING },
  reference: { type: Sequelize.STRING },
  link: { type: Sequelize.STRING },
  linktext: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

async function makeSpellingTable(){
  await Spelling.sync({force: true});
  data.spelling.forEach(async function (row) {
    await Spelling.create({
      reichard: row.reichard,
      salish: row.salish,
      nicodemus: row.nicodemus,
      english: row.english,
      note: row.note,
    });
  });
  console.log("I have an spelling table");
}

async function makeAffixTable(){
	await Affix.sync({force: true});
	var fs = require('fs');
	var contents = fs. readFileSync('/Users/johnw/Documents/COLRC/data_files/affixes.txt', 'utf8');
	var rows = contents.split("\n");
	rows.forEach(async function (row, index) {
		columns = row.split(":::");
		await Affix.create({
			type: columns[0],
			salish: columns[1],
			nicodemus: columns[2],
			english: columns[3],
			link: columns[4],
			page: columns[5],
      editnote: Sequelize.NULL,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: "1"
		});
	});
	console.log("I have an affixes table");
}

async function makeRootTable(){
	await Root.sync({force: true});
	var fs = require('fs');
	var contents = fs. readFileSync('/Users/johnw/Documents/COLRC/data_files/entries.txt', 'utf8');
	var rows = contents.split("\n");
	rows.forEach(async function (row, index) {
		columns = row.split(":::");
		await Root.create({
			root: columns[2],
			number: parseInt(columns[3]),
			salish: columns[4],
			nicodemus: columns[5],
			english: columns[6],
      editnote: Sequelize.NULL,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: "1"
		});
	});
	console.log("I have a roots table");
}

async function makeStemTable(){
	await Stem.sync({force: true});
	var fs = require('fs');
	var contents = fs. readFileSync('/Users/johnw/Documents/COLRC/data_files/stems_both_lists.txt', 'utf8');
	var rows = contents.split("\n");
	rows.forEach(async function (row, index) {
		columns = row.split(":::");
		await Stem.create({
      category: columns[0],
      reichard: columns[2],
      doak: columns[3],
			salish: columns[4],
			nicodemus: columns[5],
			english: columns[6],
			note: columns[7],
      editnote: Sequelize.NULL,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: "1"
		});
	});
	console.log("I have a stems table");
}
makeVowelTable();

makeConsonantTable();

async function makeBibliographyTable(){
	await Bibliography.sync({force: true});
	var contents = data.bibliography;
	contents.forEach(async function (row) {
		await Bibliography.create({
      author: row.author,
      year: row.year,
      title: row.title,
      reference: row.reference,
      link: row.link,
      linktext: row.linktext,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: "1"
		});
	});
	console.log("I have a bibliography table");
}

makeSpellingTable();

// makeUsersTable();

// makeAffixTable();

// makeRootTable();

// makeStemTable();

makeBibliographyTable();

// app.use('/', (req, res) => res.send("Welcome COLRC User"));
// app.listen(process.env.GRAPHQLPORT, () => console.log('COLRC Enterprise Server is ready on localhost:' + process.env.GRAPHQLPORT));
