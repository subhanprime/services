// import  from "sequelize";
const Sequelize = require('Sequelize')
module.exports = sequelize.define('postCreator', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})