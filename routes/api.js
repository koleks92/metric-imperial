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
      res.json('invalid number and unit')
    } else if (!initNum) {
      res.json( 'invalid number' )
    } else if (!initUnit) {
      res.json('invalid unit' )
    }

    // Get return unit
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    // Get return number
    const returnNum = convertHandler.convert(initNum, initUnit);

    // Get string
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    // Send response
    // TODO
    res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string})

    
  })

};
