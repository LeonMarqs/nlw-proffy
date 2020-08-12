import Knex from 'knex';
import path from 'path';

const db = Knex({
  client: 'sqlite3',
  connection: {
    filename: path. resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true, //próprio para o sqlite3
});

export default db;