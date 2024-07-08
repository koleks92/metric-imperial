'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  // Create converHandler
  let convertHandler = new ConvertHandler();

  // Create route for index submit
  app.route('/api/convert').get((req, res) => {
    // Get input
    const input = req.query.input;

    // Get initial number
    const initNum = convertHandler.getNum(input);

    // Get initial unit
    const initUnit = convertHandler.getUnit(input);

    // Check if error
    if (!initNum && !initUnit) {
      res.json({ string: 'invalid number and unit'})
    } else if (!initNum) {
      res.json({ string: 'invalid number'})
    } else if (!initUnit) {
      res.json({ string: 'invalid unit'})
    }

    // Get return unit
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    // Send response
    // TODO
    res.json({ initNum: initNum, initUnit: initUnit, returnUnit: returnUnit})

    
  })

};
