function ConvertHandler() {
    this.getNum = function (input) {
        // Regular expression to match the number part
        let match = input.match(/^(\d+(\.\d+)?)/);

        if (match) {
            return match[0];
        } else {
            if (input == this.getUnit(input)) {
                return 1;
            } else {
                return false;
            }
        }
    };

    this.getUnit = function (input) {
        // Regular expression to match the unit part
        let match = input.match(/(\d+(\.\d+)?)?([a-zA-Z]+)$/);

        const possibleUnits = ["kg", "gal", "L", "mi", "lbs", "km"];

        if (match && possibleUnits.includes(match[3])) {
            return match[3];
        } else {
            return false;
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
        
        switch (initUnit) {
            case 'kg': return (initNum / lbsToKg);
            case 'lbs': return (initNum * lbsToKg);
            case 'km': return (initNum  / miToKm);
            case 'mi': return (initNum * miToKm);
            case 'L': return (initNum / galToL);
            case 'gal': return (initNum * galToL);
        }
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        initUnitString = this.spellOutUnit(initUnit);
        returnUnitString = this.spellOutUnit(returnUnit);
        
        return `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    };
}

module.exports = ConvertHandler;
