const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;


const db = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'mydb'
});


db.connect((err) => {
  if (err) {
    console.error('Neuspeshno svurzvane=>', err);
    process.exit(1);
  }
  console.log('uspeshno svurzvane');
});

app.get('/', (req, res) => {
  res.send('Test test');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
