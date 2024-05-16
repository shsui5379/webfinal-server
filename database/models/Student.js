/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
/**
 * @type {Sequelize.Sequelize}
 */
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.pngall.com/wp-content/uploads/8/College-Student-PNG-Free-Download-1.png",
    validate: {
      isUrl: true
    }
  },

  gpa: {
    type: Sequelize.DOUBLE,
    validate: {
      min: 0,
      max: 4
    }
  }
});

// Export the student model
module.exports = Student;