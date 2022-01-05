const pg = require("pg");

// const pool = new pg.Pool({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "Microsemi**2",
//   database: "campus_buddy",
// });
const url =
  "postgres://yuksqeguhpbknb:e3f46388467040ce6a1043e317a92aa9d329c4ee5373ac7b9f6256bb27bb5751@ec2-34-239-34-246.compute-1.amazonaws.com:5432/dbo8t9pbunc938";
// const url = process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString: url,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
