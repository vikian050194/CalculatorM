function Integer(number) {
    var pattern = /\d/;
    var digits = [];
    if (typeof number === "string" & pattern.test(number)) {
        for (var i = 0; i < number.length; i++) {
            digits[number.length - i - 1] = number[i];
        }
    }
    else {
        throw "Format error!";
    }
} 