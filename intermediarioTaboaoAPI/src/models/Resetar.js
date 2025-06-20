export default (sequelize, DataTypes) => {
  const Resetar = sequelize.define('Resetar', {
    id_reset: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expira_em: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    criado_em: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'Resetar',
    timestamps: false
  });

  Resetar.associate = (models) => {
    Resetar.belongsTo(models.Cadastro, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };

  return Resetar;
};
