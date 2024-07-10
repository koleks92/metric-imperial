function ConvertHandler() {
    this.getNum = function (input) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let i = 0;
  
        for (i; i < input.length; i++) {
          if (alphabet.includes(input[i])) {
            break;
          }
        };
  
        let number = input.slice(0,i);
  
        if (!number) {
          return 1;
        } else {
          try {
            return parseFloat(number);
          } catch (err) {
            return false;
          }
        }
    };
  
    this.getUnit = function (input) {
      const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let i = 0;
  
      for (i; i < input.length; i++) {
        if (alphabet.includes(input[i])) {
          break;
        }
      };
  
      let unit = input.slice(i);
  
      const possibleUnits = ["kg", "gal", "L", "mi", "lbs", "km"];
  
      if (!unit) {
        return false
      } else {
        try {
          if (unit == 'L' || unit == 'l') {
            return 'L'
          } else if (possibleUnits.includes(unit.toLowerCase())) {
            return unit.toLowerCase();
          } else {
            return false;
          }
        } catch (err) {
          return false
        }
        
      }
    };
  
    this.getReturnUnit = function (initUnit) {
        switch (initUnit) {
          case 'kg': return 'lbs';
          case 'lbs': return 'kg';
          case 'km': return 'mi';
          case 'mi': return 'km';
          case 'gal': return 'L';
          case 'L': return 'gal';
        }
    };
  
    this.spellOutUnit = function (unit) {
        switch (unit) {
            case 'kg': return 'kilograms';
            case 'lbs': return 'pounds';
            case 'km': return 'kilometers';
            case 'mi': return 'miles';
            case 'gal': return 'galons';
            case 'L': return 'liters';
        };
    };
  
    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
  
        let result;
  
        if (initUnit == 'kg') {
            result = (initNum / lbsToKg);
        } else if (initUnit == 'lbs') {
            result = (initNum * lbsToKg);
        } else if (initUnit == 'km') {
            result = (initNum  / miToKm);
        } else if (initUnit == 'mi') {
            result = (initNum * miToKm);
        } else if (initUnit == 'L') {
            result = (initNum / galToL);
        } else if (initUnit == 'gal') {
            result = (initNum * galToL);
        }
        
        return result.toFixed(5);
    };
  
    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        initUnitString = this.spellOutUnit(initUnit);
        returnUnitString = this.spellOutUnit(returnUnit);
  
        return `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    };
  }
  
  module.exports = ConvertHandler;
  