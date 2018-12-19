var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'life_hack',
  user: 'maymo7a' // your username here!!
}

var connection = pgInstance( process.env.DATABASE_URL ||config);

module.exports = connection;