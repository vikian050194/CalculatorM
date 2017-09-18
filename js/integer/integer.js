function Int(number) {
    var pattern = /-*\d/;
    digits = [];
    this.sign = '+';
    if (typeof number === "string" & pattern.test(number)) {
        if (number[0] === '-') {
            this.sign = '-';
        }
        for (var i = 1; i < number.length; i++) {
            digits[number.length - i - 1] = parseInt(number[i]);
        }
    }
    else {
        throw "Format error!";
    }

    this.toString = function () {
        var result ='';
        if (this.sign === '-'){
            result +='-';
        }
            result += String(digits.reduce(function (previousValue, currentValue) {
                return pacurrentValue + previousValue;
            }));

        return result;
    }
} 