'use strict';

const bcrypt = require('bcrypt')

async function hash(password) {
  const salt = await bcrypt.genSalt(10);
  const passwprdHash = await bcrypt.hash(password, salt);  

  return passwprdHash;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
        {
          username: 'admin',
          password : await hash('admin123'),
          email: 'example@example.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
