const { MongoClient } = require('mongodb');

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://shubhadakodre:DxrFrhtysPdwL1lb@middlewaretechnology.nwxuvul.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      console.log('Connected to MongoDB');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

module.exports = {
  mongoConnect,
  getDb,
};
