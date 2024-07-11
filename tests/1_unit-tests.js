const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Function to check convertHandler.getNum(input)', function () {
        test('Should correctly read w whole number input', function() {
            assert.equal(convertHandler.getNum('32L'), 32);
        });

        test('Should correctly read a decimal number input', function() {
            assert.equal(convertHandler.getNum('1.5L'), 1.5);
        });

        test('Should correctly read a fractional input', function() {
            assert.equal(convertHandler.getNum('1/2L'), 0.5);
        });

        test('Should correctly read a fractional input with a deciaml', function() {
            assert.equal(convertHandler.getNum('1.5/2L'), 0.75);
        });

        test('Should correctly return an error on a double-fraction', function() {
            assert.equal(convertHandler.getNum('3/3/3km'), false);
        });

        test('Should should correctly default to a numerical input of 1 when no numerical input is provided', function() {
            assert.equal(convertHandler.getNum('km'), 1);
        });
    })
    suite('Functions to check convertHandler.getUnit(input)', function() {
        test('Should correctly read each valid input unit', function() {
            assert.equal(convertHandler.getUnit('km'), 'km');
            assert.equal(convertHandler.getUnit('L'), 'L');
            assert.equal(convertHandler.getUnit('lbs'), 'lbs');
            assert.equal(convertHandler.getUnit('mi'), 'mi');
            assert.equal(convertHandler.getUnit('kg'), 'kg');
            assert.equal(convertHandler.getUnit('gal'), 'gal');
        });
        
        test('Should correctly return an error for an invalid input unit', function() {
            assert.equal(convertHandler.getUnit('1kw'), false);
        });
    });

    suite('Functions to check converHandler.getReturnUnit(initUnit)', function() {
        test('Should return the correct return unit for each valid input unit', function() {
            assert.equal(convertHandler.getReturnUnit('L'), 'gal');
            assert.equal(convertHandler.getReturnUnit('gal'), 'L');
            assert.equal(convertHandler.getReturnUnit('km'), 'mi');
            assert.equal(convertHandler.getReturnUnit('mi'), 'km');
            assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
            assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
        });
    });

    suite('Functions to check convertHandler.spellOutUnit', function() {
        test('Should correctly return the spelled-out string unit for each valid input unit', function() {
            assert.equal(convertHandler.spellOutUnit('L'), 'liters');
            assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
            assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
            assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
            assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
            assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
        });
    });

    suite('Functions to check converHandler.convert(initNum, initUnit)', function() {
        test('Should correctly convert gal to L', function() {
            assert.equal(convertHandler.convert(1,'gal'), 3.78541);
        });
        test('Should correctly convert L to gal', function() {
            assert.equal(convertHandler.convert(3.78541,'L'), 1);
        });
        test('Should correctly convert mi to km', function() {
            assert.equal(convertHandler.convert(1,'mi'), 1.60934);
        });
        test('Should correctly convert km to mi', function() {
            assert.equal(convertHandler.convert(1.60934,'km'), 1);
        });
        test('Should correctly convert lbs to kg', function() {
            assert.equal(convertHandler.convert(1,'lbs'), 0.453592);
        });
        test('Should correctly convert kg to lbs', function() {
            assert.equal(convertHandler.convert(0.453592,'kg'), 1);
        });
        
    })
});