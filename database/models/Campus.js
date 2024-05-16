/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
/**
 * @type {Sequelize.Sequelize}
 */
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/c/ce/University_College_Toronto_1_-_April_2009_HDR.jpg"
  }
});

// Export the campus model
module.exports = Campus;