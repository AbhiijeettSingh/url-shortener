const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('test-db', 'root', 'password', {
  host: __dirname + '/db.sqlite',
  dialect: 'sqlite'
});

class Url extends Model {}

Url.init({
  // Model attributes are defined here
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  longUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  
  sequelize,
  modelName: 'Url' 
});

module.exports = {Url, sequelize};