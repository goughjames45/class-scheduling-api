'use strict';
module.exports = function(app) {
  var gradeDistribution = require('../controllers/gradeDistributionController');

  // grade distribution Routes
  app.route('/grades')
    .get(gradeDistribution.list_all_gradeDistributions)
    .post(gradeDistribution.create_a_gradeDistribution);


  app.route('/grades/:gradeDistributionId')
    .get(gradeDistribution.read_a_gradeDistribution)
    .put(gradeDistribution.update_a_gradeDistribution)
    .delete(gradeDistribution.delete_a_gradeDistribution);
};
