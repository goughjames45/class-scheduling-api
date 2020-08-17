'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GradeDistributionSchema = new Schema({

  grades: {
    type: Object,
    a:{
        type: Number
    },
    b:{
        type: Number
    },
    c: {
        type: Number
    },
    d: {
        type: Number
    },
    f: {
        type: Number
    }
  },
  name: {
      type: String
  },
  course_id: {
      type: String
  },
  department: {
      type: String
  }
});

module.exports = mongoose.model('GradeDistributions', GradeDistributionSchema);