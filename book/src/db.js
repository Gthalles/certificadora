const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("livrosdb", "postgres", "senha123", {
    host: "localhost",
    dialect: "postgres",
    logging: false // Desativa logs do Sequelize para um console mais limpo
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to PostgreSQL successfully.");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};

module.exports = { sequelize, connect };