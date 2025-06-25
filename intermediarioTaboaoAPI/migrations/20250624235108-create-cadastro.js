export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Cadastro', {
    id_cadastro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    nascimento: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    senha: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Cadastro');
}