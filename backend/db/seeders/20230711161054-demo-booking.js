'use strict';
const { Booking } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate([
      {
        spotId: 1,
        userId: 2,
        startDate: new Date('2025-12-10'),
        endDate: new Date('2025-12-15'),
      },
      {
        spotId: 2,
        userId: 3,
        startDate: new Date('2026-11-01'),
        endDate: new Date('2026-12-01'),
      },
      {
        spotId: 3,
        userId: 1,
        startDate: new Date('2027-07-01'),
        endDate: new Date('2027-07-03'),
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
