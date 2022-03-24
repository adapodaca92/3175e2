const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:now3ef239vlkn@localhost:5432/postgres",
  {
    logging: false,
  }
);

module.exports = db;
