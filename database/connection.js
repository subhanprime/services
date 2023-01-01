const Sequelize =require("sequelize");

const sequelize = new Sequelize('temp', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql',
    operatorAliases: false,
});

module.exports = sequelize;
global.sequelize = sequelize;