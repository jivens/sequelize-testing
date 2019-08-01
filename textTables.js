const data = require('./Data');
const express = require('express');
const app = express();
require('dotenv').config();
const Sequelize = require('sequelize');

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

// build the tables required for the 'texts', 'audio' and 'elicitations' areas.
// we need the following tables:  'texts', 'textfiles', 'textimages', 'audiosets' and 'audiofiles'

// first, we need a text type

const Text = sequelize.define('text', {
  title: { type: Sequelize.STRING },
  speaker: { type: Sequelize.STRING },
  cycle: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// now we need a textfiles type
const Textfile = sequelize.define('textfile', {
  subdir: { type: Sequelize.STRING },
  src: { type: Sequelize.STRING },
  resType: { type: Sequelize.STRING },
  msType: { type: Sequelize.STRING },
  fileType: { type: Sequelize.STRING },
  textID: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// set up the Text to Textfile relationship
const TextToFileRelation = sequelize.define('texttofilerelation', {
  textId: { type: Sequelize.STRING },
  textfileId: { type: Sequelize.STRING },
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// now we need a textimages type
const Textimage = sequelize.define('textimage', {
  textfileId: { type: Sequelize.STRING },
  subdir: { type: Sequelize.STRING },
  src: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  prevId: { type: Sequelize.INTEGER },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// set up the Text to Textfile relationship
const FileToImageRelation = sequelize.define('filetoimagerelation', {
  textfileId: { type: Sequelize.STRING },
  textimageId: { type: Sequelize.STRING },
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// next let's get an audiofile type
const Audiofile = sequelize.define('audiofile', {
  subdir: { type: Sequelize.STRING },
  src: { type: Sequelize.STRING },
  type: { type: Sequelize.STRING },
  direct: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// then an audioset type
const Audioset = sequelize.define('audioset', {
  title: { type: Sequelize.STRING },
  speaker: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  textId: { type: Sequelize.STRING },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Audiorelation = sequelize.define('audiorelation', {
  audiosetId: { type: Sequelize.STRING },
  audiofileId: { type: Sequelize.STRING },
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// set up the Text to Audioset relationship
const TextToAudiosetRelation = sequelize.define('texttoaudiosetrelation', {
  textfileId: { type: Sequelize.STRING },
  textimageId: { type: Sequelize.STRING },
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});


const Elicitationset = sequelize.define('elicitationset', {
  title: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  userId: { type: Sequelize.STRING },
  prevID: { type: Sequelize.INTEGER }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

const Elicitationfile = sequelize.define('elicitationfile', {
  src: { type: Sequelize.STRING },
  type: { type: Sequelize.STRING },
  direct: { type: Sequelize.STRING },
  active: { type: Sequelize.STRING(1) },
  userId: { type: Sequelize.STRING }
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// then an elicitations to elicitationfile relation
const Elicitationrelation = sequelize.define('elicitationrelation', {
  elicitationsetId: { type: Sequelize.STRING },
  elicitationfileId: { type: Sequelize.STRING },
},
{
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

// make the Text table, using Data.js
async function makeTextTable(){
  await Text.sync({force: true});
  data.texts.forEach(async function (row) {
    await Text.create({
      title: row.title,
      speaker: row.speaker,
      cycle: row.cycle,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    });
  });
  console.log("I have a texts table");
}

// make the Textfile table, using Data.js
async function makeTextfileTable(){
  await Textfile.sync({force: true});
  data.textfiles.forEach(async function (row) {
    await Textfile.create({
      subdir: row.subdir,
      src: row.src,
      resType: row.resType,
      msType: row.msType,
      fileType: row.fileType,
      textID: row.textId,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    });
  });
  console.log("I have a textfiles table");
}

// make the Textfile table, using Data.js
async function makeTextimageTable(){
  await Textimage.sync({force: true});
  data.textimages.forEach(async function (row) {
    await Textimage.create({
      textfileId: row.textfileId,
      subdir: row.subdir,
      src: row.src,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    });
  });
  console.log("I have a textimages table");
}

// make the audioset table
async function makeAudiosetTable(){
  await Audioset.sync({force: true});
  data.audiosets.forEach(async function (row) {
    await Audioset.create({
      title: row.title,
      speaker: row.speaker,
      textId: row.textId,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    });
  });
  console.log("I have an audiosets table");
}

// Set up relationships that will be used later
//Texts are linked to textfiles
Text.belongsToMany( Textfile, {
  through: "texttofilerelation", //this can be string or a model,
  foreignKey: 'TextId'
})
Textfile.belongsToMany( Text, {
  through: "texttofilerelation", //this can be string or a model,
  foreignKey: 'TextfileId'
})
//Textfiles are linked to textimages
Textfile.belongsToMany( Textimage, {
  through: "filetoimagerelation", //this can be string or a model,
  foreignKey: 'TextfileId'
})
Textimage.belongsToMany( Textfile, {
  through: "filetoimagerelation", //this can be string or a model,
  foreignKey: 'TextimageId'
})
//Texts are linked to audiosets
Text.belongsToMany( Audioset, {
  through: "texttoaudiosetrelation", //this can be string or a model,
  foreignKey: 'TextId'
})
Audioset.belongsToMany( Text, {
  through: "texttoaudiosetrelation", //this can be string or a model,
  foreignKey: 'AudiosetId'
})

//audiosets are linked to audiofiles
Audioset.belongsToMany( Audiofile, {
  //as: [SetToFile],
  through: "audiorelations", //this can be string or a model,
  foreignKey: 'AudiosetId'
})
Audiofile.belongsToMany( Audioset, {
  //as: [FileToSet],
  through: "audiorelations",
  foreignKey: 'AudiofileId'
})


//make the texttofilerelation table
async function makeTexttofilerelationTable(){
  // Define the relationships, which will automatically create a table
  await Texttofilerelation.sync({force: true});
}
//make the texttoaudiosetrelation table
async function makeTexttoaudiorelationTable(){
  // Define the relationships, which will automatically create a table
  await Texttoaudiorelation.sync({force: true});
}
//make the filetoimagerelation table
async function makefiletoimagerelationTable(){
  // Define the relationships, which will automatically create a table
  await Filetoimagerelation.sync({force: true});
}
// make the audiorelation table
async function makeAudiorelationTable(){
  // Define the relationships, which will automatically create a table
  await Audiorelation.sync({force: true});
}

// make the audiofile table from Data.js
async function makeAudiofileTable(){
  await makeAudiosetTable()
  await makeAudiorelationTable()
  await Audiofile.sync({force: true})
  data.audiofiles.forEach(await async function (row) {
    let newAudioFile = await Audiofile.create({
      subdir: row.subdir,
      src: row.src,
      type: row.type,
      direct: row.direct,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    })
    //console.log("The audio set id is: " + row.audiosetId)
    let myAudioSet = await Audioset.findOne({  where: {id: row.audiosetId} })
    //console.log(myAudioSet)
    //console.log("Fuck, the goddamn audio set is: " + myAudioSet.title)
    //console.log("Fuck, the goddamn file is: " + newAudioFile.src)
    await newAudioFile.addAudioset(myAudioSet)
  })
  console.log("I have an audiofiles table")
}
//elicitationsets are linked to elicitationfiles
Elicitationset.belongsToMany( Elicitationfile, {
  through: "elicitationrelations", //this can be string or a model,
  foreignKey: 'elicitationsetId'
})
Elicitationfile.belongsToMany( Elicitationset, {
  through: "elicitationrelations",
  foreignKey: 'elicitationfileId'
})
// make the elicitationset table
async function makeElicitationsetTable(){
  await Elicitationset.sync({force: true});
  data.elicitationsets.forEach(async function (row) {
    await Elicitationset.create({
      title: row.title,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    });
  });
  console.log("I have an elicitationsets table");
}
//make the elicitationrelation table
async function makeElicitationrelationTable(){
  await Elicitationrelation.sync({force: true});
}
// make the elicitationfile table from Data.js
async function makeElicitationfileTable(){
  await makeElicitationrelationTable();
  await makeElicitationsetTable();
  await Elicitationfile.sync({force: true});
  data.elicitationfiles.forEach(async function (row) {
    newElicitationFile = await Elicitationfile.create({
      src: row.src,
      type: row.type,
      direct: row.direct,
      active: 'Y',
      prevId: Sequelize.NULL,
      userId: '1'
    })
    let myElicitationSet = await Elicitationset.findOne({  where: {id: row.elicitationId} })
    await newElicitationFile.addElicitationset(myElicitationSet)
  });
  console.log("I have an elicitationfiles table");
}

// make the elicitationrelation table
// async function makeElicitationrelationTable(){
//   await Elicitationrelation.sync({force: true});
//   data.elicitationrelations.forEach(async function (row) {
//     await Elicitationrelation.create({
//       elicitationsetId: row.elicitationsetId,
//       elicitationfileId: row.elicitationfileId,
//       active: 'Y',
//       prevId: Sequelize.NULL,
//       userId: '1'
//     });
//   });
//   console.log("I have an elicitationrelation table");
// }
//  all function calls to build tables are below.  Uncomment the ones you want to build

makeElicitationfileTable();

//makeElicitationsetTable();

//makeAudiorelationTable();

//makeAudiosetTable();

//makeAudiofileTable();

//makeTextimageTable();

//makeTextfileTable();

//makeTextTable();
