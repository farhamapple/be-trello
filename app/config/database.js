module.exports = 
{
  // "development": {
  //   "username": "postgres",
  //   "password": "postgres",
  //   "database": "db_trello",
  //   "host": "127.0.0.1",
  //   "port" : "5432",
  //   "schema": 'public',
  //   "dialect": "postgres"
  // },
  "development": {
    "username": "root",
    "password": null,
    "database": "db_trello",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
