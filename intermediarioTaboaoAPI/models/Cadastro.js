export default (sequelize, DataTypes) => {
  const Cadastro = sequelize.define('Cadastro', {
    id_cadastro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'cadastros',
    timestamps: false
  });
  return Cadastro;
};
