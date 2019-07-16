const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('taller', 'root', 'root', {
    dialect: 'mysql'
})
class Modelo extends Model {}
Modelo.init({
    codeModel: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    codeBrand: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING
            // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'model',
    freezeTableName: true,
    timestamps: false
        // options
});

module.exports = {
    Modelo
}