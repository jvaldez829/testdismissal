const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Parent Schema
const guardianSchema = new Schema({
  prefix: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  suffix: {
    type: String
  },
  relation: {
    type: String,
    required: true
  },
  homePhone: {
    type: String,
    required: true
  },
  workPhone: {
    type: String
  },
  cellPhone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // kids go here
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
})

const Guardian = mongoose.model('Guardian', guardianSchema)

module.exports = Guardian
