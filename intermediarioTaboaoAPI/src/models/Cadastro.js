export default (sequelize, DataTypes) => {
  const Cadastro = sequelize.define('Cadastro', {
    id_cadastro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'Cadastro',
    timestamps: false
  });

  Cadastro.associate = (models) => {
    Cadastro.hasMany(models.Resetar, {
      foreignKey: 'id_usuario',
      as: 'resets'
    });
  };

  return Cadastro;
};
