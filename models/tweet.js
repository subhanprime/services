const Sequelize = require('Sequelize');

module.exports = sequelize.define('Tweet', {

    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: Sequelize.STRING(200)

}, { timestamps: false })