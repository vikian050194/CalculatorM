function Integer(number) {
    var pattern = /-*\d/;

    this.digits = [];
    this.isNegative = false;

    if (number !== undefined) {
        if (typeof number === "string" && pattern.test(number)) {
            var start = 0;

            if (number[0] === '-') {
                this.isNegative = true;
                start = 1;
            }

            for (var i = number.length - 1; i >= start; i--) {
                this.digits.push(parseInt(number[i]));
            }
        }
        else {
            throw "Format error!";
        }
    }
    else {
        this.digits[0] = 0;
    }

    this.sub = function (firstArgument, secondArgument) {

        var result = new Integer();
        if ((typeof firstArgument !== 'object') || (typeof secondArgument !== 'object')) {//этой проверки скорее всего недостаточно
            throw 'Error format in operation Sub!'
        }
        else {
            if (firstArgument.digits.length < secondArgument.digits.length) {
                var exchange = firstArgument;
                firstArgument = secondArgument;
                secondArgument = exchange;
            }

            if (firstArgument.digits.length === secondArgument.digits.length) {
                var i = firstArgument.digits.length - 1;
                while (firstArgument.digits[i] === secondArgument.digits[i]) {
                    i--;
                }
                if (firstArgument.digits[i] < secondArgument.digits[i]) {
                    var exchange = firstArgument;
                    firstArgument = secondArgument;
                    secondArgument = exchange
                }
            }
            var i = 0;
            while (i < secondArgument.digits.length) {
                if (firstArgument.digits[i] >= secondArgument.digits[i]) {
                    result.digits[i] = firstArgument.digits[i] - secondArgument.digits[i];
                    i++;
                }
                else {
                    var balance = 1;
                    while (firstArgument.digits[i + balance] === 0 && firstArgument.digits[i + balance + 1] !== undefined) {
                        firstArgument.digits[i + balance + 1] -= 1;
                        firstArgument.digits[i + balance] += 10;
                        balance++;
                    }
                    firstArgument.digits[i + 1] -= 1;
                    firstArgument.digits[i] += 10;
                    result.digits[i] = firstArgument.digits[i] - secondArgument.digits[i];
                    i++;

                }
            }
            while (i < firstArgument.digits.length) {
                if (firstArgument.digits[i] !== 0 && firstArgument.digits[i + 1] !== undefined)
                    result.digits[i] = firstArgument.digits[i];
                i++;
            }


        }

        return result;
    }

    this.toString = function () {
        var result = '';
        
        if (this.isNegative) {
            result = '-';
        }

        result += String(this.digits.reduce(function (previousValue, currentValue) {
            return '' + currentValue + previousValue;
        }));

        return result;
    }
}

Integer.add = function (firstArgument, secondArgument) {
    var result = new Integer();

    if (!(firstArgument instanceof Integer) || !(secondArgument instanceof Integer)) {
        throw 'Error format in operation Add!'
    }
    else {
        if (firstArgument.digits.length < secondArgument.digits.length) {
            var exchange = firstArgument;
            firstArgument = secondArgument;
            secondArgument = exchange;
        }

        if (firstArgument.isNegative === secondArgument.isNegative) {
            result.isNegative = firstArgument.isNegative;
            var i = 0;
            var balance = 0;

            for (; i < firstArgument.digits.length; i++) {
                var secondArgumentDigit = secondArgument.digits[i] || 0; 
                var resultDigit = firstArgument.digits[i] + secondArgumentDigit + balance;

                if (resultDigit >= 10) {
                    balance = parseInt(resultDigit / 10);
                    resultDigit %= 10;
                } else{
                    balance = 0;
                }

                result.digits.push(resultDigit);
            }

            if (firstArgument.digits.length === secondArgument.digits.length) {//need to check balance!!!
                result.digits.push(balance);
            }
        }
        else {
            if (firstArgument.isNegative && secondArgument.isNegative) {
                var exchange = firstArgument;
                firstArgument = secondArgument;
                secondArgument = exchange;
            }
            
            result = result.sub(firstArgument, secondArgument);
        }
    }

    return result;
}