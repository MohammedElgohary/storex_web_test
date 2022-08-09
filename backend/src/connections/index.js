let mysql = require("mysql2");

/**
 * Initialize the database connection
 */
const db = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  // multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  /**
   * REST api depends on the database connection
   * So when connection fails we should stop all
   */

  console.log(`Database ${process.env.DB_DATABASE} is connected !`);
});

module.exports = db;
