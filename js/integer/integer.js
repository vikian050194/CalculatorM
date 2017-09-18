function Integer(number) {
    var pattern = /-*\d/;
    this.digits = [];
    this.sign = '+';
    if (number !== undefined) {
        if (typeof number === "string" & pattern.test(number)) {
            if (number[0] === '-') {
                this.sign = '-';
                for (var i = 1; i < number.length; i++) {
                    this.digits[number.length - i - 1] = parseInt(number[i]);
                }
            }
            else {
                for (var i = 0; i < number.length; i++) {
                    this.digits[number.length - i - 1] = parseInt(number[i]);
                }
            }

        }
        else {
            throw "Format error!";
        }
    }
    else {
        this.digits[0] = 0;
    }

    this.getAdd = function (termFirst, termSecond) {
        if ((typeof termFirst !== 'object') || (typeof termSecond !== 'object')) {
            throw 'Error format in operation Add!'
        }
        else {
            if (termFirst.sign === termSecond.sign) {
                this.sign = termFirst.sign;
                var i = 0;
                var balance = 0;
                while (i <= termFirst.digits.length - 1 && i <= termSecond.digits.length - 1) {
                    this.digits[i] = termFirst.digits[i] + termSecond.digits[i] + balance;
                    balance = 0;
                    if (this.digits[i] >= 10) {
                        balance = parseInt(this.digits[i] / 10);
                        this.digits[i] %= 10;
                    }
                    i++;
                }
                if (termFirst.digits.length - 1 === termSecond.digits.length - 1) {
                    this.digits[i] = balance;
                }
                if (termFirst.digits.length - 1 < termSecond.digits.length - 1) {
                    while (i <= termSecond.digits.length - 1) {
                        this.digits[i] = termSecond.digits[i] + balance;
                        balance = 0;
                        i++;
                    }
                }
                if (termFirst.digits.length - 1 > termSecond.digits.length - 1) {
                    while (i <= termFirst.digits.length - 1) {
                        this.digits[i] = termFirst.digits[i] + balance;
                        balance = 0;
                        i++;
                    }
                }
            }
        }

        }
    


this.toString = function () {
    var result = '';
    if (this.sign === '-') {
        result += '-';
    }
    result += String(this.digits.reduce(function (previousValue, currentValue) {
        var str = '' + currentValue + previousValue;
        return str;
    }));

    return result;
}
}