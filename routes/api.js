'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  // Create converHandler
  let convertHandler = new ConvertHandler();

  // Create route for index submit
  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;

    console.log(input);
  })

};
