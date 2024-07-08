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
        let result;

        return result;
    };

    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;

        return result;
    };
}

module.exports = ConvertHandler;
