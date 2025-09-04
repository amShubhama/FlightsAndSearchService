'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Indira Gandhi International Airport",
        address: "Palam, New Delhi, Delhi, India",
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Santacruz, Mumbai, Maharashtra, India",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        address: "Devanahalli, Bengaluru, Karnataka, India",
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netaji Subhas Chandra Bose International Airport",
        address: "Dum Dum, Kolkata, West Bengal, India",
        cityId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
