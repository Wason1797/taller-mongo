const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('taller', 'root', 'root', {
    dialect: 'mysql'
})
class Vehicle extends Model { }
Vehicle.init({
    plate: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    year: {
        type: Sequelize.DATE
    },
    engine: {
        type: Sequelize.STRING
    },
    transmision: {
        type: Sequelize.STRING
    },
    codebrand: {
        type: Sequelize.STRING,
        references: {
            model: 'brand',
            key: 'codeBrand'
        }
    },
    codemodel: {
        type: Sequelize.STRING,
        references: {
            model: 'model',
            key: 'codeModel'
        }
    },
    dni: {
        type: Sequelize.STRING,
        references: {
            model: 'ower',
            key: 'dni'
        }
    }
}, {
        sequelize,
        modelName: 'vehicle',
        freezeTableName: true,
        timestamps: false
        // options
    });

module.exports = {
    Vehicle
}