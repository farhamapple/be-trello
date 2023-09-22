'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [{
      name: 'New Website',
      TodoId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'New Create Trello MERN',
      TodoId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Learn UI',
      TodoId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Learn UX',
      TodoId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
