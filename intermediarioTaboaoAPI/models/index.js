import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';
import CadastroModel from './Cadastro.js';
import ResetarModel from './Resetar.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// inicia as models
db.Cadastro = CadastroModel(sequelize, Sequelize.DataTypes);
db.Resetar = ResetarModel(sequelize, Sequelize.DataTypes);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;