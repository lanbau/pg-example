var pg = require('pg');

pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT datname FROM pg_database;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});