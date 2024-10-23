const sqlite = require('sqlite3').verbose();
const db = new sqlite3.database('memory');

db serialize( () => {
  db.run('CREATE TABLE IF NOT EXISTS Transactions( id INTEGER PRIMARY KEY,
         TYPE TEXT NOT NULL,
    CATEGORY TEXT NOT NULL,
    AMOUNT REAL NOT NULL,
    DATE TEXT NOT NULL));
});
