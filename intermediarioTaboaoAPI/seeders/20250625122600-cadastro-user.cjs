'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cadastros', [{
      nome:'Luis',
      email:'test@test.com',
      nascimento:new Date('1990-01-01'),
      senha: bcrypt.hashSync('123456', 10),
    }])

  },

  async down (queryInterface, Sequelize) {
    
  }
};