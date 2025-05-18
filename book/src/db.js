const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("livrosdb", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres"
});

module.exports = sequelize;