const Sequelize = require('Sequelize');


module.exports = sequelize.define('tagsnews', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tagsId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    newsId: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})