'use strict';


var mongoose = require('mongoose'),
  Grade = mongoose.model('GradeDistributions');

exports.list_all_gradeDistributions = function(req, res) {
  Grade.find({}, function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};


exports.create_a_gradeDistribution = function(req, res) {
  var new_grade = new Grade(req.body);
  new_grade.save(function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};


exports.read_a_gradeDistribution = function(req, res) {
  Grade.findById(req.params.gradeDistributionId, function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};


exports.update_a_gradeDistribution = function(req, res) {
  Grade.findOneAndUpdate({_id: req.params.gradeDistributionId}, req.body, {new: true}, function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};


exports.delete_a_gradeDistribution = function(req, res) {

  Grade.remove({
    _id: req.params.gradeDistributionId
  }, function(err, grade) {
    if (err)
      res.send(err);
    res.json({ message: 'Grade successfully deleted' });
  });
};