export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Resetar', {
    id_reset: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Cadastro',
        key: 'id_cadastro'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    token: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    expira_em: {
      type: Sequelize.DATE,
      allowNull: false
    },
    usado: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    criado_em: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Resetar');
}