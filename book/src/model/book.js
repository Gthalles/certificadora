const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Book = sequelize.define("Book", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    publisher: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: false });

sequelize.sync();

module.exports = Book;