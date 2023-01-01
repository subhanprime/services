const Sequelize = require('Sequelize');


module.exports = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    content: { 
        type: Sequelize.STRING,
    }
}, {
    timestamps: false
})