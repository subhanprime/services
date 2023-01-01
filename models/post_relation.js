const Sequelize = require('Sequelize');

module.exports = sequelize.define('post_relation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    postCreatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
})