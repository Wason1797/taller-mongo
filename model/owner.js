const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('taller', 'root', 'root', {
    dialect: 'mysql'
})
class Owner extends Model { }
Owner.init({
    dni: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    birthDate: {
        type: Sequelize.DATE
        // allowNull defaults to true
    }
}, {
        sequelize,
        modelName: 'owner',
        freezeTableName: true,
        timestamps: false
        // options
    });


module.exports = {
    Owner
}