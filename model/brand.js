const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('taller', 'root', 'root', {
    dialect: 'mysql'
})
class Brand extends Model {}
Brand.init({
    codeBrand: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
            // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'brand',
    freezeTableName: true,
    timestamps: false
        // options
});

module.exports = {
    Brand
}