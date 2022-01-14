const pg = require("pg");
const { Client } = require('pg')
const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Microsemi**2",
  database: "debt_tracker",
});
const url =
  "postgres://haqtpkopukuhud:b3c4cdf5a8db41830395cebda6c17e4b414e2babf2bfa317891520efa77b9ea1@ec2-54-224-194-214.compute-1.amazonaws.com:5432/d56f1v21r5ln8k";
// const url = process.env.DATABASE_URL;
// const pool = new pg.Pool({
//   connectionString: url,
//   // ssl: {
//   //   rejectUnauthorized: false,
//   // },
//   idleTimeoutMillis: 0,
//   connectionTimeoutMillis: 2000,
// });
// console.log("requesting db");
// pool.connect((err, client, release) => {
//   console.error("Error acquiring client", err);
//   console.error("Error acquiring client", client);
//   console.error("Error acquiring client", release);
//  if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release()
//     if (err) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows)
//   })  

// });
// pool.on("connect", () => {
//   console.log("connected to the db");
// });
// pool.on("error", function (err, client) {
//   console.log(client);
//   console.log(err);
// });
module.exports = pool;
