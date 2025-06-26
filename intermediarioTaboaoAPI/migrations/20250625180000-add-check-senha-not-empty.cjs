

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "A senha não pode ser nula ou uma string vazia"
    );
  },

  async down(queryInterface, Sequelize) {
  }
};