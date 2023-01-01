const Sequelize = require("Sequelize")


module.exports = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: Sequelize.STRING(200)
},{
    timestamps: false
})