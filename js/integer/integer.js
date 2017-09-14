function Integer(number) {
    var pattern = /\d/;
    digits = [];
    if (typeof number === "string" & pattern.test(number)) {
        for (var i = 0; i < number.length; i++) {
            digits[number.length - i - 1] = number[i];
        }
    }
    else {
        throw "Format error!";
    }

    this.toString = function () {
        var result = digits.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });

        return result;
    }
} 